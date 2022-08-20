class Product {
  constructor(public name: string,public price: number,public category?: string){
    this.name = name;
    this.price = price;
    this.category = category;
  }

  //name: string;
  //price : number;
  //category?: string;

  printDetails(){
    if(this.category != undefined){
      console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);

    }else{
      console.log(`Name: ${this.name}, Price: ${this.price}`);

    }
  }
}

class DiscountProduct extends Product{
  constructor( name: string, price: number, private discount: number){
    super(name, price - discount);
  }
}
