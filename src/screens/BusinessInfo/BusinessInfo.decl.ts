import { IVendor } from '@bridghq/types';

export type BusinessInfoType = Pick<IVendor.UpdateArgs, 'country' | 'currency' | 'category'>;

export interface Currency {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
}

export interface Country {
    iso: string;
    name: string;
    unicode: string;
    flag: string;
}

export interface Business {
    type:
        | 'Retail'
        | 'Resturant'
        | 'Freelance'
        | 'Service provider'
        | 'Entrepreneur'
        | 'Small business'
        | 'Other';
}

export interface BusinessProps {
    businessCurrency: string;
    businessCountry: string;
    businessCategory: string;
}
