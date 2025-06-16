import { expect, test } from '../fixtures'

test.describe('Chekout page', () => {
    test('Succesful checkout', async ({ products, checkout }) => {
        await products.goto()

        await test.step('Add product to cart', async () => {
            await products.addToCartButton.first().click()
            const count = await checkout.cartCountNum()
            await expect(count).toBeGreaterThan(0)
        })

        await test.step('Verify cart count is 1', async () => {
            const count = await checkout.cartCountNum()
            await expect(count).toBe(1)
        })

        await test.step('Open cart and go to check out', async () => {
            await checkout.cart()
            await checkout.checkoutBtn()
        })

        await test.step('User is in check out page', async () => {
            await checkout.gotoCheckout()
        })
        await test.step('User fills the shipping details', async () => {
            await checkout.shippingName('Donald Duck')
            await checkout.shippingAddress('Quack quack')
            await checkout.shippingCity('Disneyland')
            await checkout.shippingZipCode('1234')
            await checkout.shippingPhone('12345')
        })

        await test.step('Verify "Place order" button is enabled', async () => {
            await checkout.placeOrder()
            await checkout.confirmOrder()
        })
    })

    test('Return to products', async ({ products, checkout }) => {
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

    test('Cancel order', async ({ products, checkout }) => {
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