export class ReviewItem{
    public name: string;
    public description: string;
    public imagePath: string;
    public salesPrice: number;
    public cost: number;
    
 constructor(name:string, desc:string, imagePath:string, salesPrice:number, cost:number){
     this.name=name,
     this.description = desc,
     this.imagePath = imagePath,
     this.salesPrice= salesPrice,
     this.cost=cost
 }
 
 }