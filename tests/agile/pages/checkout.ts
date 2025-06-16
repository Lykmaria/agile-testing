import { Locator, Page, expect } from "@playwright/test"

export class Checkout {
    private page: Page
    private cartButton: Locator
    private checkoutButton: Locator
    private name: Locator
    private address: Locator
    private zipCode: Locator
    private city: Locator
    private phone: Locator
    private cancelButton: Locator
    readonly placeOrderButton: Locator
    private returnButton: Locator
    private confirmOrderButton: Locator
    private verificationCancelBtn: Locator
    private cartCount: Locator

    constructor(page: Page) {
        this.page = page
        this.cartButton = this.page.locator('[data-test-id=cart-button]')
        this.checkoutButton = this.page.locator('[data-test-id=checkout-button]')
        this.name = this.page.locator('[data-test-id=name-input]')
        this.address = this.page.locator('[data-test-id=address-input]')
        this.zipCode = this.page.locator('[data-test-id=zip-input]')
        this.city = this.page.locator('[data-test-id=city-input]')
        this.phone = this.page.locator('[data-test-id=phone-input]')
        this.cancelButton = this.page.locator('[data-test-id=cancel-checkout-button]')
        this.placeOrderButton = this.page.locator('[data-test-id=place-order-button]')
        this.returnButton = this.page.locator('[data-test-id=return-button]')
        this.confirmOrderButton = this.page.locator('[data-test-id="modal-confirm-button"]')
        this.verificationCancelBtn = this.page.locator('[data-test-id="modal-confirm-cancel-button"]')
        this.cartCount = this.page.locator ('[data-test-id="cart-count"]')
    }

    async gotoCheckout() {
        await this.page.goto('https://aatp.vercel.app/checkout')
    }

    async cart() {
        await this.cartButton.click()
    }

    async shippingName(name: string) {
        await expect(this.name).toBeVisible()
        await this.name.fill(name)
    }

    async shippingAddress(address: string) {
        await expect(this.address).toBeVisible()
        await this.address.fill(address)
    }

    async shippingZipCode(zip: string) {
        await expect(this.zipCode).toBeVisible()
        await this.zipCode.fill(zip)
    }

    async shippingCity(city: string) {
        await expect(this.city).toBeVisible()
        await this.city.fill(city)
    }

    async shippingPhone(phone: string) {
        await expect(this.phone).toBeVisible()
        await this.phone.fill(phone)
    }

    async placeOrder() {
        await expect(this.placeOrderButton).toBeVisible()
        await this.placeOrderButton.click()
    }

    async confirmOrder() {
        await expect(this.confirmOrderButton).toBeVisible()
        await this.confirmOrderButton.click()
    }

    async cancelOrder() {
        await expect(this.cancelButton).toBeVisible()
        await this.cancelButton.click()
    }

    async returnBtn() {
        await expect(this.returnButton).toBeVisible()
        await this.returnButton.click()
    }

    async checkoutBtn() {
        await this.checkoutButton.click()
    }

    async verificationCancelation() {
        await this.verificationCancelBtn.click()
    }

    async cartCountNum(): Promise<number> {
        await expect(this.cartCount).toBeVisible()
        const text = await this.cartCount.textContent()
        return Number (text ?? '0')
    }
}