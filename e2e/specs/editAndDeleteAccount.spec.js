const expect = require('chai').expect;

const {credentials} = require('../../environment');

const Login = require('../pages/login.po');
const AccountForm = require('../pages/accountFormModal.po');
const AccountView = require('../pages/accountView.po');
const ObjectCreator = require('../pages/objectCreator');


describe('Account Feature', () => {

    beforeEach(() => {
        let header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        let account = {
            'Name': 'MyAccountNameTest',
            'Phone': '(546) 5465465',
            'Fax': '(546) 5465465'
        };
        ObjectCreator.createAccount(account);
    });

    it('Edit an Account', () => {
        let accountView = new AccountView();
        accountView.clickEditButton();
        let accountForm = new AccountForm();
        let editedAccount = {
            'Name': 'MyAccountNameEdited',
            'Phone': '(546) 5411115',
            'Fax': '(546) 5422225'
        };
        accountForm.fillForm(editedAccount);
        accountForm.clickSaveButton();

        expect(accountView.getNameText()).to.equal(editedAccount.Name);
        expect(accountView.getPhoneText()).to.equal(editedAccount.Phone);

        accountView.clickDetailsTab();

    });

    // it('Delete an Account', () => {
    //
    // });
});
