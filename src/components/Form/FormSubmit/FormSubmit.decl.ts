import { ReactNode } from 'react';

import { ButtonProps } from '@components/Button';

export interface FormSubmitProps extends Omit<ButtonProps, 'onPress'> {
    children?: ReactNode;
}
