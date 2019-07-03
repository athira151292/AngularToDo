export class Task {
    public name: string;
    public id: number;
    public completedStatus: boolean;
    
    constructor(name: string,id: number,completed: boolean){
        this.name = name;
        this.id = id;
        this.completedStatus = completed;
    }
}