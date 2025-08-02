import supertest from 'supertest';
import web from '../src/application/web.js';
import { PrismaClient } from "../src/application/database.js";

const prisma = new PrismaClient();

describe('POST /api/users', () => {

    afterEach(async () => {
        await prisma.user.deleteMany({
            where: {
                username: 'ikinoru'
            }
        });
    });

    it('should create a new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'ikinoru',
                password: 'helloworld',
                name: 'Iksan',
            });

        expect(result.status).toBe(200);
        expect(result.body.username).toBe('ikinoru');
        expect(result.body.name).toBe('Iksan');
        expect(result.body.data?.password).toBeUndefined();
    });
});
