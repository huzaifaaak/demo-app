import 'styled-components';
import {colors} from './colors';
import {theme} from './components';
import {Font} from './fonts';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
        components: typeof theme;
        font: typeof Font;
    }
}
