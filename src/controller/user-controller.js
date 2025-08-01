import userService from '../service/user-service.js';

const register = async (req, res, next) => {
    try {
        const user = userService.register(req.body);
        res.status(201).json({
            data : user
        });
    } catch (error) {
        next(error);
    }
};

export default {
    register,
};