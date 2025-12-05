import zod from 'zod';
export const requestBody = await zod.object({
    name: zod.string(),
    email: zod.email(),
    password: zod.string()
});
export const signinBody = await zod.object({
    email: zod.email(),
    password: zod.string()
});
//# sourceMappingURL=type.js.map