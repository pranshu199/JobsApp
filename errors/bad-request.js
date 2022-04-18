import { StatusCodes } from 'http-status-codes';
import CustomAPIerror from './custom-api.js'

class BadRequestError extends CustomAPIerror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST 
    }
}

export default BadRequestError;

