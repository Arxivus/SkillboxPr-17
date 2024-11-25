async function createWarehousePage(container) {

    const components = await import('./components.js')
    const productActions = await import('./productsActions.js')
    const navigate = await import('./main.js')

    const titleBlock = components.getTitleBlock()
    const title = components.getTitleEl('Склад')
    const addButton = components.getButtonEl('Добавить запись')

    addButton.addEventListener('click', function (e) {
        e.preventDefault()
        navigate.navigatePage('productAdd')
    })
    titleBlock.append(title, addButton)

    const page = components.getPageEl()
    const products = await productActions.getProducts()
    const table = await productActions.createProductsTable()

    page.append(titleBlock, table)
    container.append(page)
    
    productActions.updateTable(products)
    setSortable()
}

async function setSortable() {
    const productActions = await import('./productsActions.js')
    const sortName = document.querySelector('.name');
    sortName.addEventListener('click', function () { productActions.sortProducts('name') })

    const sortShelf = document.querySelector('.shelf');
    sortShelf.addEventListener('click', function () { productActions.sortProducts('shelf') })

    const sortWeight = document.querySelector('.weight');
    sortWeight.addEventListener('click', function () { productActions.sortProducts('weight') })

    const sortTime = document.querySelector('.time');
    sortTime.addEventListener('click', function () { productActions.sortProducts('time') })
}

export {
    createWarehousePage
}