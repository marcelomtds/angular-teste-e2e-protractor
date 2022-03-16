import { browser, by, element } from "protractor";
const path = require('path');
const image = '../../../src/assets/img/home.jpg';

export class PhotoUploadPage {

    static PAGE_TITLE = 'Photo upload';

    async navigateTo(): Promise<any> {
        return browser.get(`${browser.baseUrl}#/p/add`)
    }

    async getWindowTitle(): Promise<string> {
        return browser.getTitle();
    }

    async fillDescription(text: string): Promise<void> {
        return element(by.css('textarea[formcontrolname=description]'))
            .sendKeys(text);
    }

    async upload(): Promise<void> {
        return element(by.css('button[type=submit]'))
            .click();
    }

    async selectImage(): Promise<void> {
        const absolutePathImage = path.resolve(__dirname, image);
        return element(by.css('input[formcontrolname=file]'))
            .sendKeys(absolutePathImage);
    }
}
