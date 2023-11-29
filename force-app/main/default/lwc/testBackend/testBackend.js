import { LightningElement, track, api } from 'lwc';
import getContacts from '@salesforce/apex/testBackend.getContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
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
console.log(this.firstn + this.lastn); 
}
handleClick() {
debugger
console.log('acc Id is: '+this.recordId);
getContacts({First:this.firstn, Last:this.lastn, accId:this.recordId})
.then(response => {
    console.log('Server response:', response);
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Contact Created Successfully!',
            variant: 'success',
        })
    );
    setTimeout(() => {
        window.location.reload();
    }, 2000);        })
.catch(error => {
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Error',
            message: 'Sorry! Contact not Created Successfully!',
            variant: 'Error',
        })
    );
    setTimeout(() => {
        window.location.reload();
    }, 2000);   
    console.error('Error:', JSON.stringify(error));
});     }
handleClear(){
debugger
    this.firstn = [];
    this.lastn = [];
}
}