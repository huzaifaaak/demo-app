import 'styled-components/native';

import { colors } from './colors';
import { components } from './components';
import { Font } from './fonts';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: typeof colors;
        components: typeof components;
        font: typeof Font;
    }
}
