import IconCheckboxCircleFill from '@icons/CheckboxCircleFill';
import IconErrorWarningFill from '@icons/ErrorWarningFill';
import IconInformationFill from '@icons/InformationFill';

import { Theme } from '@theme/restyle';

export function getIcon(variant?: Omit<keyof Theme['bannerVariants'], 'defaults'>) {
    switch (variant) {
        case 'success': {
            return IconCheckboxCircleFill;
        }

        case 'warning':
        case 'error': {
            return IconErrorWarningFill;
        }

        default: {
            return IconInformationFill;
        }
    }
}
