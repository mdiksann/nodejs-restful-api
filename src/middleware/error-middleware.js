import { ResponseError } from '../error/response-error.js';

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        return res.status(err.statusCode).json({
            error: err.message
        }).end();

    }else{
        res.status(500).json({
            error: err.message
        }).end();
    }
}

export default errorMiddleware;