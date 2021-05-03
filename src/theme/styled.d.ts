import 'styled-components';

import { colors } from './colors';
import { components } from './components';
import { Font } from './fonts';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
        components: typeof components;
        font: typeof Font;
    }
}
