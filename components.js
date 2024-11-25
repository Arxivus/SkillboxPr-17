
function getTitleBlock() {
    const block = document.createElement('div');
    block.classList.add('title-block')
    return block
}

function getTitleEl(text) {
    const title = document.createElement('h1');
    title.textContent = text
    title.classList.add('main-title')
    return title
}

function getFormEl() {
    const form = document.createElement('form');
    form.classList.add('form')
    return form
}

function getInputEl(type, name, placeholder) {
    const input = document.createElement('input');
    input.type = type
    input.name = name
    input.placeholder = placeholder
    input.classList.add('form-input')
    input.required = true
    return input
}

function getButtonEl(text, elClass = 'link-button') {
    const button = document.createElement('button');
    button.textContent = text
    button.classList.add(elClass)
    return button
}

async function handleFormSubmit(e) {

    e.preventDefault()
    const productActions = await import('./productsActions.js')

    const productName = document.querySelector('input[name=productName]').value;
    const shelfId = document.querySelector('input[name=shelfId]').value;
    const productWeight = document.querySelector('input[name=productWeight]').value;
    const date = document.querySelector('input[name=date]').value;
    const product = {
        productName,
        shelfId,
        productWeight,
        date,
    };
    productActions.addProduct(product);
}

function getPageEl() {
    const page = document.createElement('div');
    page.classList.add('page')
    return page
}

function getLoaderEl() {
    const loader = document.createElement('div');
    loader.classList.add('lds-ring')

    for (let i = 0; i < 3; i++) {
        const divEl = document.createElement('div');
        loader.append(divEl)
        
    }
    
    return loader
}

export {
    getPageEl,
    getLoaderEl,
    getTitleBlock,
    getTitleEl,
    getInputEl,
    getFormEl,
    getButtonEl,
    handleFormSubmit
}