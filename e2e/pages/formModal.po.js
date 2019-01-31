const commonActions = require('../core/CommonActions');

class Form {

    constructor() {
        this.saveButton = 'button[title="Save"]';

        commonActions.waitForVisible('.modal-container.slds-modal__container');
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
        commonActions.waitForInVisible('.modal-container.slds-modal__container');
    }

}

module.exports = Form;
