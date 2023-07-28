import { last } from "rxjs";

export class task {
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
          this._id = task.lastId;
          task.lastId++;
        }

        this.title = title;
        this.description = description;
          this.complete = complete;
          // this.created_at = createDate;
          // this.updated_at= updateDate;
    }

  
    public static setLastId(last : number){
      task.lastId = ++last;
      console.log("SET LAST ID TO "+ last);     
    }
    public static getLastId(): number{
      return task.lastId;
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
    
    // public getUpdated_at(): Date {
    //   return this.updated_at;
    // }
    // public setUpdated_at(value: Date) {
    //   this.updated_at = value;
    // }

    
  
  
    toString(): string{
      return "TASK + "+this.getTitle()+" id: "+this.getId();
    }
  
    
  }

  export default task;