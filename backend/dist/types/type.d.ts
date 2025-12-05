import zod from 'zod';
export declare const requestBody: zod.ZodObject<{
    name: zod.ZodString;
    email: zod.ZodEmail;
    password: zod.ZodString;
}, zod.z.core.$strip>;
export declare const signinBody: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
}, zod.z.core.$strip>;
export interface DecodeType {
    id: string;
}
//# sourceMappingURL=type.d.ts.map