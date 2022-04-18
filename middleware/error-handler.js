import { StatusCodes } from "http-status-codes";




const errorHandlerMiddleware = (err, req, res, next) =>{
    console.log(err);
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "something went wrong, please try again later"
    }
    
    if(err.name === "ValidationError"){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
    }
    if(err.code && err.code === 11000){
        defaultError.msg = "Email is taken";
    }
    // res.status(defaultError.statusCode).json({msg:err})
    res.status(defaultError.statusCode).json({msg:defaultError.msg});
}

export default errorHandlerMiddleware;