import { LightningElement, track } from 'lwc';
export default class SimpleCalculator extends LightningElement {
    operand1 = 0;
     operand2 = 0;
     Operator = '';
     value = '';    
     result = 0;
     options =  [
        { label: '+', value: '+' },
        { label: '-', value: '-' },
        { label: '*', value: '*' },
        { label: '/', value: '/' },
    ];
    handleInputChange(event) {
        const inputField = event.target;
        const fieldName = inputField.name;
        this[fieldName] = parseInt(inputField.value);
    }
    handleChange(event) {
        this.value = event.detail.value;
        if (this.value == '+') {
            this.result = this.operand1 + this.operand2;
        }
       else if (this.value == '-') {
            this.result = this.operand1 - this.operand2;
        }
        else if (this.value == '*') {
            this.result = this.operand1 * this.operand2;
        }
        else if (this.value == '/') {
            this.result = this.operand1 / this.operand2;
        }
    }
}