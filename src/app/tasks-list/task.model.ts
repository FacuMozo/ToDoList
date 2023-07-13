export class task {
  private static lastId: number = 0;
  private _id: number ;
    private title: string ;
    description: string ;
    private complete: boolean;
    
    created_at : Date;
    private updated_at: Date ;
    
    constructor(title:string,description:string,
      complete: boolean, createDate:Date, updateDate: Date){
        this._id = task.lastId;
        task.lastId++;
        this.title = title;
        this.description = description;
          this.complete = complete;
          this.created_at = createDate;
          this.updated_at= updateDate;
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
    
    public getUpdated_at(): Date {
      return this.updated_at;
    }
    public setUpdated_at(value: Date) {
      this.updated_at = value;
    }
  
  
  
  
    
  }