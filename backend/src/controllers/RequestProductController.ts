import RequestProduct from '../models/RequestProduct';
import knex from '../database/database';


interface Result {
    status: boolean;
    message: string | object;
    user?: Array<object> | object
}


class RequestProductController{

}

export default RequestProductController;