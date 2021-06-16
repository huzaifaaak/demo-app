import 'styled-components/native';

import { colors } from './colors';
import { Font } from './fonts';
import { components } from './sc-components';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: typeof colors;
        components: typeof components;
        font: typeof Font;
    }
}
