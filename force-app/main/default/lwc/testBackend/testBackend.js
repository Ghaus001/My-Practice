import { LightningElement, track, api } from 'lwc';
import getContacts from '@salesforce/apex/testBackend.getContacts';
export default class MyComponent extends LightningElement {
    contacts;
    @api recordId = '';
     firstn = '';
    lastn = '';
    handleInputChange(event) {
        const inputField = event.target;
        const fieldName = inputField.name;
        if(fieldName == 'firstName'){
            this.firstn = inputField.value;
        }else if(fieldName == 'lastName')
        this.lastn = inputField.value;
        console.log(this.firstn + this.lastn); // Add this line
    }
    handleClick() {
        // Make a server request when the button is clicked
        debugger
        console.log('acc Id is: '+this.recordId);
        // You can use the wire adapter or call the Apex method directly
        getContacts({First:this.firstn, Last:this.lastn, accId:this.recordId})
       // window.location.reload();
     }
    handleClear(){
        debugger
         this.firstn = [];
         this.lastn = [];
    }
}