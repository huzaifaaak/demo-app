import {DefaultTheme} from '@react-navigation/native';
import {theme as components} from './components';
import {colors} from './colors';
import {Font as font} from './fonts';

const Theme = {
    ...DefaultTheme,
    components,
    colors,
    font,
};

export default Theme;
