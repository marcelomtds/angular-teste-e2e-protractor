import { browser, by, element, protractor } from 'protractor';

export class HomePage {

    static PAGE_TITLE = 'Timeline';

    async navigateTo(): Promise<any> {
        return browser.get(`${browser.baseUrl}#/user/flavio`);
    }

    async getWindowTitle(): Promise<string> {
        return browser.getTitle();
    }

    async getPhotoListSize(): Promise<number> {
        return element
            .all(by.css('.photo'))
            .count();
    }

    async fillSearchInputWith(text: string): Promise<void> {
        return element(by.css('ap-search input[type=search]'))
            .sendKeys(text);
    }

    async clickOnFirstItemFromPhotoList(): Promise<void> {
        return element
            .all(by.css('.photo'))
            .first()
            .sendKeys(protractor.Key.ENTER);
    }
}
