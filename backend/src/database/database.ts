import knex from 'knex';

const connection = knex({
    client: 'mysql2',
    connection: {
        host: '',
        port: 3306,
        user: 'root',
        password: '',
        database: ''
    }
});

export default connection;