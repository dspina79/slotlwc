import { LightningElement, api } from 'lwc';

export default class Basicbox extends LightningElement {

    @api HeaderText = '';

    handleRegister(event) {
        var item = event.detail;
        var guid = item.guid;
        this.privateChildrenRecord[guid] = item;
    }
}