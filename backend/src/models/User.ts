class User{
    private id: number;
    private name: string;
    private email: string;
    private phone: string;
    private birth: string;
    private password: string;


    constructor(id: number, name: string, email: string, phone: string, birth: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.password = password;

    }

    
    get getId() : number {
        return this.id;
    }
    set setId(id: number){
        this.id = id;
    }
    
    get getName() : string {
        return this.name;
    }
    set setName(name: string){
        this.name = name;
    }
    
    get getEmail() : string {
        return this.email;
    }
    set setEmail(email: string){
        this.email = email;
    }
    
    get getPhone() : string {
        return this.phone;
    }
    set setPhone(phone: string){
        this.phone = phone;
    }

    get getBirth() : string {
        return this.birth;
    }
    set setBirth(birth: string){
        this.birth = birth;
    }

    get getPassword() : string {
        return this.password;
    }
    set setPassword(password: string){
        this.password = password;
    }


}

export default User;