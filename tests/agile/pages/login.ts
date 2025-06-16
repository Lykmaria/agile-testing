import { Locator, Page } from '@playwright/test'

export class Login {
    private page: Page
    private usernameInput: Locator
    private passwordInput: Locator
    private submitButton: Locator
    private loginTitle: Locator
    private errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = this.page.locator('[data-test-id=email-input]')
        this.passwordInput = this.page.locator('[data-test-id=password-input]')
        this.submitButton = this.page.locator('[data-test-id=login-button]')
        this.loginTitle = this.page.locator('[data-test-id=login-title]')
        this.errorMessage = this.page.locator('[data-test-id="login-error"]')
    }

    async goTo() {
        await this.page.goto('https://aatp.vercel.app/')
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()

    }

    async isAtpage() {
        return await this.loginTitle.isVisible()
    }

    async errorMessageIsVisible() {
        return await this.errorMessage.isVisible()
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent()
    }
}
