export const colors = {
    transparent: 'rgba(0,0,0,0)',

    // White
    white: '#fffef9',

    // Black
    blackDarker: '#000000',
    blackDark: '#121212',
    black: '#1e1e1e',
    blackLight: '#222222',
    blackLighter: '#2e2e2e',

    // Primary
    primaryDarker: '#07197a',
    primaryDark: '#1437b7',
    primary: '#2962ff',
    primaryLight: '#5e8dff',
    primaryLighter: '#7ea7ff',

    // Secondary
    secondaryDarker: '#476a6a',
    secondaryDark: '#71a6a6',
    secondary: '#bae8e8',
    secondaryLight: '#e3f6f5',
    secondaryLighter: '#f0f2f2',

    // Grey
    greyDarker: '#4f4f4f',
    greyDark: '#828282',
    grey: '#bdbdbd',
    greyLight: '#e0e0e0',
    greyLighter: '#f2f2f2',

    // Green
    greenDark: '#1b7d45',
    greenDarker: '#104e2b',
    green: '#24da78',
    greenLight: '#2eff8e',
    greenLighter: '#abf8cb',

    // Blue
    blueDarker: '#0d2c3e',
    blueDark: '#175172',
    blue: '#2d9cdb',
    blueLight: '#56ccf2',
    blueLighter: '#cbf2ff',

    // Yellow
    yellowDarker: '#3a3100',
    yelowDark: '#ae9300',
    yellow: '#ffd803',
    yellowLight: '#ffe86b',
    yellowLighter: '#fff3b4',

    // Orange
    orangeDarker: '#542801',
    orangeDark: '#a95102',
    orange: '#ff7800',
    orangeLight: '#ff993f',
    orangeLighter: '#ffb879',

    // Red
    redDarker: '#430c0c',
    redDark: '#871616',
    red: '#da2424',
    redLight: '#ff5a5a',
    redLighter: '#ff8b8b',
};

export type Colors = typeof colors;
export type ColorType = keyof Colors;

type ColorConstants = {
    [T in ColorType]: T;
};

export const Color = Object.keys(colors).reduce(
    (acc, color) => ({
        ...acc,
        [color]: color,
    }),
    {}
) as ColorConstants;
