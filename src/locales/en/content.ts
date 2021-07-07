export const Content = {
    global: {
        divider: 'or',
    },
    welcome: {
        description: 'Start selling today with the\nPoint of Sale for modern businesses',
        cta: {
            create: 'Create account',
            login: 'Login now',
        },
        accountExists: 'Already have an account?',
    },
    login: {
        header: 'Login',
        fields: {
            email: 'Email',
            password: 'Password',
            submit: {
                default: 'Login',
                loading: 'Loading..',
            },
        },
        forgotPassword: 'Forgot password?',
        hasForgottenPassword: 'Please check your email to reset your password',
        footer: {
            lead: "Don't have an account yet?",
            cta: 'Sign up and start selling',
        },
    },
    signup: {
        header: 'Sign up',
        fields: {
            firstName: 'First name',
            lastName: 'Last name',
            businessName: 'Business name',
            email: 'Email',
            password: 'Password',
            submit: {
                default: 'Sign up',
                loading: 'Loading..',
            },
        },
        terms:
            'By signing up, you agree to our\n<2>terms & conditions</2> and <4>privacy policy</4>',
        footer: 'Already have an account?\n<2>Login now</2>',
    },
    businessInfo: {
        header: 'Business information',
        info:
            "Provide us with some simple information about your business to help us help you. Don't worry, you can change this information later!",
        fields: {
            country: {
                label: 'Country',
                placeholder: 'Select a country',
            },
            currency: {
                label: 'Currency',
                placeholder: 'Select a currency',
            },
            category: {
                label: 'Business type',
                placeholder: 'Select a category',
            },
        },
    },
    product: {
        empty: 'Uh-oh! Your shelf is empty. Go ahead, and add your first item!',
        createItem: {
            category:
                'By default all items are created under “Uncategorized”. To change this, set a category as default.',
            price:
                'Add a single price for this item or create variations of this item, each with it’s price.',
        },
    },
};
