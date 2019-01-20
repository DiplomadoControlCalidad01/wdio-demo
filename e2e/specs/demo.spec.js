const {credentials} = require('../../environment');

const Login = require('../pages/login.po');
const AccountForm = require('../pages/accountFormModal.po');

describe('Login to salesforce', () => {
    it('Login', () => {
        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openItem('Account');
        content.clickNewButton();

        let accountForm = new AccountForm();
        accountForm.setName('MyAccountName');
        accountForm.clickSaveButton();
    });
});
