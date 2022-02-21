import { LightningElement } from 'lwc';

export default class DemoLwc extends LightningElement {

    message='Good Morning';

    student={
        name : 'ABC',
        age :23
    }

    courses=['Apex','LWC','Aura']

    handleClick(){
       

    }
   
    get courseName(){
        return this.courses[0]
    }
    
    handleChange(event){
            console.log(event)
            console.log(event.target)                
            console.log(event.target.value)
            
    }

}