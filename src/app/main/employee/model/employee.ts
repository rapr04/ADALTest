export interface IEmployee{
    id: number;
    name:string;
    function:string;
}

export class Employee implements IEmployee
{
    id: number;
    name:string;
    function:string;
    constructor(obj?: Employee){
        if(obj){
            Object.assign(this,obj);
        }
    }
}