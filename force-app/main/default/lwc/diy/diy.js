import { LightningElement,track } from 'lwc';

export default class Diy extends LightningElement {

    openingBalance;

    @track student={}


    handleClick(){
        alert(this.template.querySelector('.Name').value)
       console.log(this.template.querySelector('.Name').value);
       this.student.Name=this.template.querySelector('.Name').value;
       this.student.Age=this.template.querySelector('.Age').value;
    }

}