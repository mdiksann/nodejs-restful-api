import {validate} from '../validation/validation.js';
import {registerUserValidation} from '../validation/user-validation.js';
import { PrismaClient } from '@prisma/client/extension';
import { ResponseError } from '../error/response-error.js';
import bcrypt from 'bcrypt';
import e from 'express';

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

export { register };
export default {
    register,
};
