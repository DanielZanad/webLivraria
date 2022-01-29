class Product{
    private id: number;
    private name: string;
    private price: number;
    private img: string;
    private cod_categ: number;
    private description: string

    constructor(id: number, name: string, price: number, img: string, cod_categ: number, description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.cod_categ = cod_categ;
        this.description = description;
    }

    
    get getId() : number {
        return this.id;
    }
    set setId(id: number){
        this.id = id;
    }

    get getName() : string{
        return this.name;
    }
    set setName(name: string){
        this.name = name;
    }

    get getPrice() : number{
        return this.price;
    }
    set setPrice(price: number){
        this.price = price;
    }
    
    get getImg() : string{
        return this.img;
    }
    set setImg(img: string){
        this.img = img;
    }

    get getCod_categ() : number{
        return this.cod_categ;
    }
    set setCod_categ(cod_categ: number){
        this.cod_categ = cod_categ;
    }

    get getDescription(): string{
        return this.description
    }
    set setDescrition(description: string){
        this.description = description
    }

}

export default Product;