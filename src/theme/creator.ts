import { AllProps } from '@shopify/restyle';

import { baseTheme } from './restyle/base-theme';

// import { Theme } from './restyle';

type CSSProps =
    | Partial<AllProps<typeof baseTheme>>
    | {
          [key: string]: string | number;
      };

type NestedProps =
    | CSSProps
    | {
          [key: string]: CSSProps;
      };

interface Builder<N extends string, V extends string, U extends NestedProps> {
    variant<V2 extends string>(
        name: Exclude<V2, V>,
        value: Partial<NestedProps>
    ): Builder<N, V | V2, U>;
    seal(): Record<N, Record<V, U>>;
}

export function component<T extends string, U extends NestedProps>(name: T, defaults?: U) {
    const result = { [name]: { defaults } };

    const builder = {
        variant(variant: string, data: Partial<NestedProps>) {
            Object.defineProperty(result[name], variant, {
                ...data,
                get() {
                    return {
                        ...result[name].defaults,
                        ...data,
                    };
                },
            });
            return builder;
        },
        seal() {
            return result;
        },
    };

    return (builder as unknown) as Builder<T, 'defaults', U>;
}
