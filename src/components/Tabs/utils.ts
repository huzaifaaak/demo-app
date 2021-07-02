import { BorderProps } from '@shopify/restyle';

import { Theme } from '@theme/restyle';
import { Radius } from '@theme/restyle/constants';

export function getBorderRadius(index: number, last?: boolean): Partial<BorderProps<Theme>> {
    if (last) {
        return {
            borderTopRightRadius: Radius.REGULAR,
            borderBottomRightRadius: Radius.REGULAR,
        };
    }

    if (!index) {
        return {
            borderTopLeftRadius: Radius.REGULAR,
            borderBottomLeftRadius: Radius.REGULAR,
        };
    }

    return {
        borderRadius: Radius.SHARP,
    };
}
