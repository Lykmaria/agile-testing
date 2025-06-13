import {test as base} from '@playwright/test'
import {Login} from './pages/login'
import { Products } from './pages/products'
import { Checkout } from './pages/checkout'


export const test = base.extend <{
    login: Login
    products: Products
    checkout: Checkout
}>({
    login: async ({page }, use) => {
        const login = new Login(page)
        await login.goTo()
        await use(login)
    },


    products: async ({page}, use) => {
        const products = new Products(page)
        await use(products)
    },



    checkout: async ({page}, use) => {
        const checkout = new Checkout(page)
        await use(checkout)
    }

})
export { expect } from '@playwright/test'