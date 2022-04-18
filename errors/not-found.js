import { StatusCodes } from 'http-status-codes';
import CustomAPIerror from './custom-api.js'

class NotFoundError extends CustomAPIerror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND 
    }
}

export default NotFoundError;