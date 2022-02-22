import { LightningElement } from 'lwc';


export default class Jsdemo extends LightningElement {

   
    message='Welcome'

    firstName;
    lastName;
    counter=0;
    mark;

    student ={
        name : 'John',
        department : 'CS'
    }
    
    courses=['Apex','LWc','Aura']

    get courseName(){
        return this.courses[this.counter];
    }

    handleClick(){
        this.counter+=1;
    }

    handleChange(event){
        
        if(event.target.name=='txtFirstName')
        {
            this.firstName=event.target.value;
           // this.mark=parseInt(event.target.value);
        }
        else if(event.target.name=='txtLastName')
        {
            this.lastName=event.target.value;
        }

    }

}