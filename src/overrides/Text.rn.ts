import { cloneElement } from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components';

let oldRender = (Text as any).render;
(Text as any).render = (...args: any[]) => {
    const {
        colors: { white },
        font: { REGULAR },
    } = useTheme();

    let origin = oldRender.call(this, ...args);
    return cloneElement(origin, {
        style: [{ color: white, fontFamily: REGULAR, fontSize: 14 }, origin.props.style],
    });
};
