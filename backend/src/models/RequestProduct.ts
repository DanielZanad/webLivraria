class RequestProduct{
    private id_user: number;
    private id_prod: number;
    private amount: number;
    private total_price: number;

    constructor(id_user: number, id_prod: number, amount: number, total_price: number){
        this.id_user = id_user;
        this.id_prod = id_prod;
        this.amount = amount;
        this.total_price = total_price;
    }

    get getId_user(): number{
        return this.id_user;
    }
    set setId_user(id_user: number){
        this.id_user = id_user;
    }

    get getId_prod(): number{
        return this.id_prod;
    }
    set setId_prod(id_prod: number){
        this.id_prod = id_prod;
    }

    get getAmount(): number{
        return this.amount;
    }
    set setAmount(amount: number){
        this.amount = amount;
    }

    get getTotal_price(): number{
        return this.total_price;
    }
    set setTotal_price(total_price: number){
        this.total_price = total_price;
    }
}

export default RequestProduct;