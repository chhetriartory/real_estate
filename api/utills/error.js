export const errorHandler = (statusCode, message)=>{
    //usinig javascript defult constructor to create new error
    const error = new Error();
    error.statusCode = statusCode
    error.message = message
    return error

}