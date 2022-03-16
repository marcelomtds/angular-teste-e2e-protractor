import { browser, by, element } from "protractor";

export class SignUpPage {

    static PAGE_TITLE = 'Sign up';

    async navigateTo(): Promise<any> {
        return browser.get(`${browser.baseUrl}#/home/signup`)
    }

    async getWindowTitle(): Promise<string> {
        return browser.getTitle();
    }

    async fillField(control: string, text: string): Promise<void> {
        return element(by.formControlName(control))
            .sendKeys(text);
    }

    async register(): Promise<void> {
        return element(by.css('button[type=submit]'))
            .click();
    }
}
