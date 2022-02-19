import { LightningElement } from 'lwc';

export default class DemoLwc extends LightningElement {

    
    
    x=[10,20,30,40]
    handleClick(){
        
       let m= this.x.map(function(value){
            return value*2
        })
        console.log(m)

    }
   
    
}