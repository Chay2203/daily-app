 import { PrismaClient } from '@prisma/client'

 const prismaCilentSingleton = () => {
    return new PrismaClient();
 };

 declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaCilentSingleton>;
 } & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaCilentSingleton();

export default prisma;

if (process.env.NODE_ENV === 'development') {
    globalThis.prismaGlobal = prisma;
}
