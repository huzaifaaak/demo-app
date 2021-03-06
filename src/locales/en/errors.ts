export const Errors = {
    auth: {
        emailExists: 'Email already exists',
        invalidPassword: 'Invalid Password',
        register: {
            email: {
                invalidString: 'Email is required',
                invalidType: 'Email is required',
                pattern: 'Email is invalid',
            },
            password: {
                tooSmall: 'Password is too small',
                invalidType: 'Password is required',
            },
            firstName: {
                invalidType: 'First name is required',
            },
            lastName: {
                invalidType: 'Last name is required',
            },
            businessName: {
                tooSmall: 'Business name is required',
                invalidType: 'Business name is required',
            },
            businessCountry: {
                tooSmall: 'Business country is required',
                invalidType: 'Business country is required',
            },
            businessCategory: {
                tooSmall: 'Business category is required',
                invalidType: 'Business category is required',
            },
        },
    },
    products: {
        items: {
            loading: 'There was an error loading your items. You can try again or request help.',
        },
    },
};
