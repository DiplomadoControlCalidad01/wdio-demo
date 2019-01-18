var assert = require('assert');
const credentials = require('../../environment').credentials;

describe('Login to salesforce', () => {
    it('Login', () => {
        browser.url('https://login.salesforce.com');

        browser.waitForVisible('#theloginform', 30000);

        // browser.waitForVisible('#username', 30000);
        browser.element('#username').setValue(credentials.sysadmin.username);

        // browser.waitForVisible('#password', 30000);
        browser.element('#password').setValue(credentials.sysadmin.password);

        // browser.waitForVisible('#Login', 30000);
        browser.element('#Login').click();

        browser.waitForVisible('.salesforceIdentityAppLauncherHeader', 30000);
        browser.element('.salesforceIdentityAppLauncherHeader').click();

        // modal is displayed
        browser.waitForVisible('.modal-container.slds-modal__container', 30000);

        browser.waitForVisible('a[href="/lightning/o/Account/home"]', 30000);
        browser.element('a[href="/lightning/o/Account/home"]').click();

        // click new button
        browser.waitForVisible('a[title="New"]', 30000);
        browser.element('a[title="New"]').click();

        // modal is displayed
        browser.waitForVisible('.modal-container.slds-modal__container', 30000);

        browser.waitForVisible('//span[contains(text(), \'Account Name\')]/parent::label/following-sibling::input', 30000);
        browser.element('//span[contains(text(), \'Account Name\')]/parent::label/following-sibling::input').setValue('My Account name');


        browser.waitForVisible('button[title="Save"]', 30000);
        browser.element('button[title="Save"]').click();

        // for delete
        browser.pause(30000);
    });
});
