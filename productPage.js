async function createProductAddPage(container) {
    const components = await import('./components.js')

    const title = components.getTitleEl('Добавить запись')

    const page = components.getPageEl()

    const form = components.getFormEl()

    const productName = components.getInputEl('text', 'productName', 'Название')
    const shelfId = components.getInputEl('text', 'shelfId', 'Полка')
    const productWeight = components.getInputEl('number', 'productWeight', 'Вес')
    productWeight.min = 0.1
    productWeight.step = 0.1
    const date = components.getInputEl('date', 'date', '')

    const addButton = components.getButtonEl('Добавить запись')
    addButton.type = 'submit'

    form.append(productName, shelfId, productWeight, date, addButton)
    page.append(title, form)
    container.append(page)

    form.addEventListener('submit', components.handleFormSubmit)
}


export {
    createProductAddPage
}