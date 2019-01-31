const expect = require('chai').expect;

const {credentials} = require('../../environment');

const Login = require('../pages/login.po');
const AccountForm = require('../pages/accountFormModal.po');
const AccountView = require('../pages/accountView.po');

describe('Account Feature', () => {

    let header;

    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
    });

    it('#BVT Create an Account', () => {
        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openItem('Account');

        content.clickNewButton();
        let accountForm = new AccountForm();
        let account = {
            'Name': 'MyAccountName',
            'Phone': '(546) 5465465',
            'Fax': '(546) 5465465'
        };
        accountForm.fillForm(account);
        accountForm.clickSaveButton();

        let accountView = new AccountView();
        expect(accountView.getNameText()).to.equal(account.Name);
        expect(accountView.getPhoneText()).to.equal(account.Phone);

        accountView.clickDetailsTab();

    });
});
