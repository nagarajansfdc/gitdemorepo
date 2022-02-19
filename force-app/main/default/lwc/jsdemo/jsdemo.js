import { LightningElement } from 'lwc';

export default class Jsdemo extends LightningElement {

    //function to sum two numbers


    sum(x,y)
    {
        return x+y;
    }
   
    handleClick(){

        let result=this.sum(10,20);

        console.log('sum='+result) 
    }
    

    
    

    
    
}