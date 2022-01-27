import knex from "../src/database/database";

it("Testar a conexao com o banco de dados, inserindo dados",()=>{

    // Select  
    return knex.raw('select 1+1 as result').then((data) =>{
        expect(data[0][0].result).toEqual(2);
    });
})

