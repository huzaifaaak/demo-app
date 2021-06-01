import React, { ComponentType } from 'react';

import { useTheme } from 'styled-components/native';

export interface IconProps {
    icon: ComponentType<{ height?: number; width?: number; fill?: string }>;
    size?: number;
    fill?: string;
}

export function Icon({ icon: WrappedIcon, size = 24, fill }: IconProps) {
    const {
        colors: { white },
    } = useTheme();

    return <WrappedIcon width={size} height={size} fill={fill || white} />;
}
