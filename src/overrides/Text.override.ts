import { cloneElement } from 'react';

import { Text } from 'react-native';

import { Theme } from '../theme';
import { Font } from '../theme/fonts';

const oldRender = (Text as any).render;
(Text as any).render = (...args: any[]) => {
    const origin = oldRender.call(this, ...args);
    return cloneElement(origin, {
        style: [
            { color: Theme.colors.white, fontFamily: Font.REGULAR, fontSize: 14 },
            origin.props.style,
        ],
    });
};
