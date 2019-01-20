const commonActions = require('../core/CommonActions');

const Form = require('./formModal.po');

class AccountForm extends Form {

    constructor() {
        super();
        this.nameTextField = '//span[contains(text(), "Account Name")]/parent::label/following-sibling::input';
    }

    setName(name) {
        commonActions.setValue(this.nameTextField, name);
    }

}

module.exports = AccountForm;
