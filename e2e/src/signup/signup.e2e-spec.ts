import { browser, logging } from 'protractor';
import { HomePage } from '../home/home.po';
import { SignInPage } from '../signin/signin.po';
import { SignUpPage } from './signup.po';

describe('SignUp Page', () => {

    let signUpPage: SignUpPage;
    let signInPage: SignInPage;
    let homePage: HomePage;

    afterEach(async () => {
        const logs = await browser
            .manage()
            .logs()
            .get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });

    beforeEach(async () => {
        signUpPage = new SignUpPage();
        signInPage = new SignInPage();
        homePage = new HomePage();
        await signUpPage.navigateTo();
    });

    it('Should be on Signup Page', async () => {
        const title = await signUpPage.getWindowTitle();
        expect(title).toEqual(SignUpPage.PAGE_TITLE);
    });

    it('Should register a user', async () => {
        const randomSuffix = Math.round(Math.random() * 100000);
        await signUpPage.fillField('email', `email${randomSuffix}@email.com`);
        await signUpPage.fillField('fullName', `same name ${randomSuffix}`);
        const userName = `user${randomSuffix}`;
        await signUpPage.fillField('userName', userName);
        const password = '12345678';
        await signUpPage.fillField('password', password);
        await signUpPage.register();
        let title = await signInPage.getWindowTitle();
        expect(title).toEqual(SignInPage.PAGE_TITLE);
        await signInPage.fillUserNameField(userName);
        await signInPage.fillPasswordField(password);
        await signInPage.login();
        title = await homePage.getWindowTitle();
        expect(title).toEqual(HomePage.PAGE_TITLE);
    });
});
