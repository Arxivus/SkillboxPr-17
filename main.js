import { getLoaderEl } from './components.js';

export async function navigatePage(pageName) {
    const app = document.getElementById('app');
    app.innerHTML = ''

    const loader = getLoaderEl()
    app.append(loader)

    switch (pageName) {
        case 'productAdd':
            const productPage = await import('./productPage.js')
            productPage.createProductAddPage(app)
            loader.remove()
            break
        default:
            const warehousePage = await import('./warehousePage.js')
            warehousePage.createWarehousePage(app)
            loader.remove()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    navigatePage()
})

// сделать лоадер 
