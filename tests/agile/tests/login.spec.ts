import {test, expect} from '../fixtures'

test.describe('User Authentication', () => {
    test.use({storageState: undefined})

    test('Successful log in', async ({login, products }) => {
        await test.step('User is on login page', async () => {
            expect(await login.isAtpage()).toBeTruthy();
        }); 
        
        await login.login('test@test.com', 'test')
            expect(await products.productsAreVisible())
    
        }) 
    })

    test('Succesful log in and log out', async ({login, products}) => {
        await test.step('User log ins and logs out successfully', async () => {
            expect(await login.isAtpage()).toBeTruthy();
        })

        await test.step('User logs in', async () => {
            await login.login('test@test.com', 'test')

        })   
        
        await test.step('User logs out', async() => {
            await products.logout()
        })

        await test.step('Return to login page', async () => {
            expect(await login.isAtpage()).toBeTruthy();
        })

    })    

    const invalidCredentials = [
        {username: 'wrong@test.com', password: 'test',
            error: 'Invalid credentials'},
        {username: 'test@test.com', password: 'wrong',
            error: 'Invalid credentials'}
    ]    

    invalidCredentials.forEach(({username, password, error}) => {
        test(`Verify error message:${username} - ${password}`,
        async ({login}) => {
        expect(await login.isAtpage()).toBeTruthy()

        await login.login(username, password)
        expect(await login.errorMessageIsVisible()).toBeTruthy()
        expect(await login.getErrorMessage()).toBe(error)
        })
    })