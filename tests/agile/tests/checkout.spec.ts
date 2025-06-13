import { channel } from 'diagnostics_channel'
import {test, expect} from '../fixtures'
import { Checkout } from '../pages/checkout'
import { checkServerIdentity } from 'tls'

test.describe('Chekout page', () => {
    test('Succesful checkout', async ({products, checkout}) => {
        await products.goto() 
       
        await test.step('Click add to cart', async () => {
            await products.addToCartButton.first().click()
        })

        await test.step('Click cart button', async () => {
            await checkout.cart()
        })

        await test.step('Click check out button', async () => {
            await checkout.checkoutBtn()
        })
        
        await test.step('User is in check out page', async () => {
            await checkout.gotoCheckout()
        })
        await test.step('User fills the shipping information', async () => {
            await checkout.shippingName()
        })

        await test.step('User fills the shipping information', async () => {
            await checkout.shippingAddress()
        })

        await test.step('User fills the shipping information', async () => {
            await checkout.shippingCity()
        })

        await test.step('User fills the shipping information', async () => {
            await checkout.shippingPhone()
        })

        await test.step('User fills the shipping information', async () => {
            await checkout.shippingZipCode()
        })   
    })

    test('Return to products', async ({products, checkout}) => {
        await products.goto()

        await test.step('Click add to cart', async () => {
            await products.addToCartButton.first().click()
        })

        await test.step('Click cart button', async () => {
            await checkout.cart()
        })

        await test.step('Click check out button', async () => {
            await checkout.checkoutBtn()
        })

        await test.step('Press return to products button', async () => {
            await checkout.returnBtn()
        })
        
    })

     test('Cancel order', async ({products, checkout}) => {
        await products.goto()

        await test.step('Click add to cart', async () => {
            await products.addToCartButton.first().click()
        })

        await test.step('Click cart button', async () => {
            await checkout.cart()
        })

        await test.step('Click check out button', async () => {
            await checkout.checkoutBtn()
        })

        await test.step('Press cancel order butto ', async () => {
            await checkout.cancelOrder()
        })

        await test.step('Verify cancelation', async () => {
            await checkout.verificationCancelation()
        })
        
    })

 })


