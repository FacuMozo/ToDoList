import { last } from "rxjs";

export class Task {
    private static lastId: number = 0;
    _id: number ;
    public title: string ;
    description: string ;
    complete: boolean;
    
    // created_at : Date;
    // updated_at: Date ;
    
    constructor(title:string,description:string,
      complete: boolean,_id : number
      // , createDate:Date, updateDate: Date
      ){
        if ( _id != -1){
          this._id = _id;
        }else{
          this._id = Task.lastId;
          Task.lastId++;
        }

        this.title = title;
        this.description = description;
          this.complete = complete;
          // this.created_at = createDate;
          // this.updated_at= updateDate;
    }

  
    public static setLastId(last : number){
      Task.lastId = ++last;
      console.log("SET LAST ID TO "+ last);     
    }
    public static getLastId(): number{
      return Task.lastId;
    }

    
    public getId(): number {
      return this._id;
    }
    public setId(value: number) {
      this._id = value;
    }
    public getTitle(): string {
      return this.title;
    }
    public setTitle(value: string) {
      this.title = value;
    }
    public getComplete(): boolean {
        return this.complete;
    }
    public setComplete(value: boolean) {
        this.complete = value;
    }
    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description= value;
    }
    
    // public getUpdated_at(): Date {
    //   return this.updated_at;
    // }
    // public setUpdated_at(value: Date) {
    //   this.updated_at = value;
    // }

    
  
  
    toString(): string{
      return "<Task ID: "+this.getId()+" Task title: "+this.getTitle()+ ", "+ this.getDescription()+">";
    }
  
    
  }

  export default Task;