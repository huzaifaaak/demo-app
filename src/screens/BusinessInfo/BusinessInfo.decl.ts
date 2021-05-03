import { IAuth } from '@bridghq/types';

export type BusinessInfoType = Omit<
    IAuth.RegisterArgs,
    'firstName' | 'lastName' | 'email' | 'password'
>;
