import { SpacingProps, SpacingShorthandProps, VariantProps } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

export type BannerProps = VariantProps<Theme, 'Banner'> &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> & {
        message: string;
    };
