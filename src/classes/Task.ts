export class Task{
    public progress: number;
    public completed: boolean;
    public _id: string;

    constructor(
        public name: string,
        public goal: number,
        public color: string,
    ){
        this.progress = 0;
        this.completed = false;
        this._id = "";
    }
}