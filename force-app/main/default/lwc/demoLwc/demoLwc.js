import { LightningElement } from 'lwc';
import {discount} from './utlis'
import add from './utlis'
import * as util from './utlis'


export default class DemoLwc extends LightningElement {

    message='Good Morning';
    firstName;
    lastName;

    student={
        name : 'ABC',
        age :23
    }

    courses=['Apex','LWC','Aura']

    handleClick(){
       
       console.log('sum='+ (parseInt(this.firstName)+ parseInt(this.lastName)))
       
    }
   
    get courseName(){
        return this.courses[0]
    }
    
    handleChange(event){

            console.log(event.target.value)
            console.log(event.target.name)
            this.message='Good Morning ' + event.target.value
           
            
            if(event.target.name=='FName')
                this.firstName=event.target.value;
            else if(event.target.name=='LName')
                this.lastName=event.target.value;
            

    }

}