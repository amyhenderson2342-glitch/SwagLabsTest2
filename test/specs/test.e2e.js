import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Products from '../pageobjects/products.js'
import Cart from '../pageobjects/cart.js'

// Positive Test

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i = 0; i < Login.credentials.users.length; i++) {
            await Login.open();
            await Login.login(Login.credentials.users[i], Login.credentials.universalPass)
            await expect(Products.productTitle).toHaveText('Products');
        }
    await Login.open();
    await Login.login(Login.credentials.lockedUser, Login.credentials.universalPass)
    await expect(Login.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});

// Negative Tests 1

describe('My Login application', () => {
   async function loginWithInvalidCredentials(username, password, errrorMessage) {
    await expect(Login.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
   }       
    it('should not login with invalid credentials', async () => {

        for (let i = 0; i < Login.credentials.users.length; i++) {
            
            await Login.login(Login.credentials.users[i], Login.credentials.badPass)
            
            await Login.login(Login.credentials.misspelledUser[i], Login.credentials.universalPass)
            
            await Login.login(Login.credentials.no_User[i], Login.credentials.universalPass)
            
            await Login.login(Login.credentials.users[i], Login.credentials.no_Pass)
            
            await Login.login(Login.credentials.universalPass, Login.credentials.users[i])
            
        }
    });
});

// Negative Tests 2

describe('My Login application', () => {
    it('should not login with invalid credentials', async () => {

        for (let i = 0; i < Login.credentials.users.length; i++) {
            await Login.open();
            await Login.login(Login.credentials.noUsername, Login.credentials.universalPass)
            await expect(Login.errorMessage).toHaveText('Epic sadface: Username is required');
            await Login.open();
            await Login.login(Login.credentials.users[i], Login.credentials.noPassword)
            await expect(Login.errorMessage).toHaveText('Epic sadface: Password is required');
        }
    });
});