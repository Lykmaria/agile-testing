import { expect, test } from "../fixtures"

test.describe('Product listing', () => {
    test('Products with detail and add to cart button are displayed', async ({products}) => {
            await test.step('Navigate to product page', async () => {
                await products.goto()
            })

            await test.step('Verify product name is visible', async () => {
                await expect(products.productName.first()).toBeVisible();
            });

            await test.step('Verify product price is visible', async () => {
                await expect(products.productPrice.first()).toBeVisible();
            });

            await test.step('Verify details button is visible', async () => {
                await expect(products.detailsButton.first()).toBeVisible()
            })

            await test.step('Verify add to cart button is visible', async () => {
                await expect(products.addToCartButton.first()).toBeVisible()
            })
        })

    test('Pressing detail button', async ({products}) => {
        await products.goto()

        await test.step('Viewing details', async () => {
            await products.viewDetails()
        })
    })    

    test('Product is being added to cart', async ({products}) => {
        await products.goto() 
       
        await test.step('Click add to cart', async () => {
            await products.cart
        })
    })

    test('Product is being added to cart and being deleted', async ({products}) => {
        await products.goto() 
       
        await test.step('Click add to cart', async () => {
            expect (products.addToCartButton.first())
        })

        await test.step('Delete from cart', async () => {
            expect (products.removeFromCart())
        })
    })
})    
