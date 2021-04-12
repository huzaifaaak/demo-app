import {DefaultTheme} from '@react-navigation/native';
import {theme as components} from './components';
import {colors} from './colors';

const Theme = {
    ...DefaultTheme,
    components,
    colors,
};

export default Theme;
