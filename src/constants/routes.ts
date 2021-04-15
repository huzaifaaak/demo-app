export namespace Routes {
    export const Base = {
        WELCOME: 'welcome',
        LOGIN: 'login',
        REGISTER: 'register',
        APP: 'app',
        CHECK_AUTH: 'check-auth',
    };

    export const App = {
        CHECKOUT: 'checkout',
        PRODUCTS: 'products',
        TRANSACTIONS: 'transactions',
        SETTINGS: 'settings',
    };

    export const Products = scopedRoute(
        {
            LIST_ITEMS: 'list-items',
            LIST_CATEGORIES: 'list-categories',
            CREATE_ITEM: 'create-item',
            CREATE_CATEGORY: 'create-category',
            VIEW_ITEM: 'view-item',
            VIEW_CATEGORY: 'view-category',
            EDIT_ITEM: 'edit-item',
            EDIT_CATEGORY: 'edit-category',
        },
        App.PRODUCTS
    );
}

function scopedRoute<T>(obj: Record<keyof T, string>, scope: string) {
    return Object.entries(obj).reduce(
        (acc, [key, value]) => ({
            [key]: `${scope}/${value}`,
        }),
        {}
    ) as {[K in keyof T]: string};
}