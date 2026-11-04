import { $ } from '@wdio/globals'
import Base1 from './base1.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Base1 {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get errorMessage () {
        return $('.error-message-container');
    }

    credentials = {
       users: [ "standard_user", "problem_user", "performance_glitch_user", "error_user", "visual_user" ],
       lockedUser: "locked_out_user",
       universalPass: "secret_sauce",
       badPass: "gobbiltygook",
       misspelledUser: [ "standerd_user", "problemm_user", "performince_glitch_userr", "eror_user", "visaul_user", "locked_user" ],
       no_Pass: "secretsauce",
       no_User: ["standarduser", "problemuser", "performanceglitchuser", "erroruser", "visualuser", "lockedoutuser" ],
       noPassword: "",
       noUsername: "",
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new Login();
