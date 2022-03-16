import { browser, by, element } from "protractor";

export class SignInPage {

    static PAGE_TITLE = 'Sign in';

    async getWindowTitle(): Promise<string> {
        return browser.getTitle();
    }

    async fillUserNameField(text: string): Promise<void> {
        return element(by.css('input[formcontrolname=userName]'))
            .sendKeys(text);
    }

    async fillPasswordField(text: string): Promise<void> {
        return element(by.css('input[formcontrolname=password]'))
            .sendKeys(text);
    }

    async login(): Promise<void> {
        return element(by.css('button[type=submit]'))
            .click();
    }
}
