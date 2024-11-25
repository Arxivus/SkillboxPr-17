import { navigatePage } from './main.js'

async function getProducts() {
    return await JSON.parse(localStorage.getItem('products')) || []
}

async function createProductsTable() {
    
    const table = document.createElement('table');
    table.classList.add('table')
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    tableHead.innerHTML = `<tr>
                <th class='name'>Название</th>
                <th class='shelf'>Полка</th>
                <th class='weight'>Вес</th>
                <th class='time'>Время хранения</th>
                <th></th>
            </tr>`
    table.append(tableHead, tableBody)
    return table
}

async function updateTable(products) {
    const components = await import('./components.js')
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''

    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.productName}</td>
            <td>${product.shelfId}</td>
            <td>${product.productWeight}</td>
            <td>${product.date}</td>
        `;
        const deleteProductField = document.createElement('td');
        deleteProductField.classList.add('end')

        const deleteButton = components.getButtonEl('Удалить', 'delete-button')
        deleteButton.onclick = () => {
            deleteProduct(product)
        }

        deleteProductField.append(deleteButton)
        row.append(deleteProductField)

        tableBody.append(row);
    });
    
}

async function addProduct(product) {  
    const products = await getProducts()
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    navigatePage()
}

async function deleteProduct(product) {
    const products = await getProducts()
    let index = 0
    products.forEach(stored => {
        if (JSON.stringify(product) === JSON.stringify(stored)) {
            products.splice(index, 1)
        }
        index++
    })

    localStorage.setItem('products', JSON.stringify(products))
    navigatePage()
}

async function sortProducts(parameter) {
     
    let products = await getProducts()
    switch (parameter) {
        case 'name':
            products = products.sort((p1, p2) => p1.productName.toLowerCase().localeCompare(p2.productName.toLowerCase()))
            break
        case 'shelf':
            products = products.sort((p1, p2) => p1.shelfId.localeCompare(p2.shelfId))
            break
        case 'weight':
            products = products.sort((p1, p2) => p1.productWeight - p2.productWeight)
            break
        case 'time':
            products = products.sort((p1, p2) => new Date(p1.date) - new Date(p2.date))
            break
    }
    localStorage.setItem('products', JSON.stringify(products))
    updateTable(products)
}

export {
    getProducts,
    createProductsTable,
    updateTable,
    addProduct,
    deleteProduct,
    sortProducts
}