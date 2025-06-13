import {Locator, Page, expect } from "@playwright/test"

export class Products {
    private page: Page
    readonly productName: Locator
    readonly productPrice: Locator
    readonly detailsButton: Locator
    readonly addToCartButton: Locator
    private cartButton: Locator
    private removeButton: Locator
    private logoutBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.productName = this.page.locator('[data-test-id=product-name]')
        this.productPrice = this.page.locator ('[data-test-id=product-price]')
        this.detailsButton = this.page.locator ('[data-test-id=view-details-button]')
        this.addToCartButton = this.page.locator ('[data-test-id=add-to-cart-button]')
        this.cartButton = this.page.locator ('[data-test-id=cart-button]')
        this.removeButton = this.page.locator ('[data-test-id=remove-item-1]')
        this.logoutBtn = this.page.locator ('[data-test-id="logout-button"]')

    }

    async goto () {
        await this.page.goto('https://aatp.vercel.app/dashboard')
    }

    async productsAreVisible () {
        return await this.productName.first().isVisible()
    }

    async priceIsVisible (){
        return await this.productPrice.first().isVisible()
    }

    async cart () {
        await this.addToCartButton.click() 
    }

    async removeFromCart () {
        await expect(this.cartButton).toBeVisible()
        await this.cartButton.click()
        await expect (this.removeButton).toBeVisible()
        await this.removeButton.click()
    }

    async viewDetails () {
        await this.detailsButton.first().click()
    }

    async logout () {
        await expect (this.logoutBtn).toBeVisible()
        await this.logoutBtn.click()
    }

    export 

}