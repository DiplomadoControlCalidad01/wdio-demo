const AccountForm = require('../pages/accountFormModal.po');
const Navigator = require('../pages/navigator');

class ObjectCreator {

    static createAccount(account) {
        let content = Navigator.navigateSObject('Account');
        content.clickNewButton();
        let accountForm = new AccountForm();
        accountForm.fillForm(account);
        accountForm.clickSaveButton();
    }

}

module.exports = ObjectCreator;