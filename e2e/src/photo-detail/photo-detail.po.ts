import { browser, by, element } from "protractor";

export class PhotoDetailPage {

    static PAGE_TITLE = 'Photo detail';

    async navigateTo(id: number): Promise<any>  {
        return browser.get(`${browser.baseUrl}#/p/${id}`);
    }

    async getWindowTitle(): Promise<string> {
        return browser.getTitle();
    }

    async fillComment(text: string): Promise<void> {
        return element(by.css('textarea.form-control'))
            .sendKeys(text);
    }

    async publishComment(): Promise<void> {
        return element(by.css('button[type=submit]'))
            .click();
    }

    async getCommentListSize(): Promise<number> {
        return element
            .all(by.css('ap-photo-comments li'))
            .count();
    }
}
