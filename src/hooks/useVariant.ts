import { useMemo } from 'react';

import { ResponsiveValue, useResponsiveProp, useTheme } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

export function useVariant<
    U extends keyof Omit<Theme, 'colors' | 'spacing' | 'borderRadii' | 'breakpoints'>,
    V extends ResponsiveValue<keyof Theme[U], Theme>
>(variantKey: U, variant?: V) {
    const { [variantKey]: component } = useTheme<Theme>();
    const variantValue = useResponsiveProp(variant as string) as keyof Theme[U][keyof Theme[U]];

    return useMemo(() => {
        const ThemeComponent = component as Theme[U];

        if (variantValue) {
            return {
                style: (ThemeComponent as any)[variantValue] as Theme[U][keyof Theme[U]],
                variantValue,
            };
        }

        return {
            style: ThemeComponent.defaults as Theme[typeof variantKey]['defaults'],
            variantValue,
        };
    }, [variantValue, component]);
}
