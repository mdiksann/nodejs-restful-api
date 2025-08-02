import {validate} from '../validation/validation.js';
import {loginUserValidation, registerUserValidation} from '../validation/user-validation.js';
import { PrismaClient } from '@prisma/client/extension';
import { ResponseError } from '../error/response-error.js';
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await PrismaClient.user.count({
        where: {
            username: user.username,
        },
    });

    if (countUser > 0) {
        throw new ResponseError('Username already exists', 400);
    }

    user.password = await bcrypt.hash(user.password, 10);

    return await PrismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    });
}

const login = async (request) => {
    const  loginRequest = validate(loginUserValidation, request);

    const user = await PrismaClient.user.findUnique({
        where: {
            username: loginRequest.username,
        },
        select: {
            username: true,
            password: true,
        }
    });

    if (!user) {
        throw new ResponseError('Invalid username or password', 401);
    }

   const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError('Invalid username or password', 401);
    }

    const token = uuid().toString();
    return await PrismaClient.user.update({
        where: {
            username: user.username,
        },
        data: {
            token: token,
        },
        select: {
            token: true
        }
    });
}

export { register };
export default {
    register, login
};
