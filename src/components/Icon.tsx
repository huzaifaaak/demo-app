import React, { ComponentType } from 'react';

import { useTheme } from 'styled-components/native';

export interface WrappedIconProps {
    icon: ComponentType<IconProps>;
    size?: number;
    fill?: string;
}

export function Icon({ icon: WrappedIcon, size = 24, fill }: WrappedIconProps) {
    const {
        colors: { white },
    } = useTheme();

    return <WrappedIcon width={size} height={size} fill={fill || white} />;
}
