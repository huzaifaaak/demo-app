import styled, { css, DefaultTheme } from 'styled-components/native';

export const TabBarItem = styled.TouchableOpacity(
    ({
        theme: {
            colors: { primary, blackLighter },
            components: {
                TabBar: { height },
            },
        },
        width,
        routesLength,
        isTabActive,
    }: {
        theme: DefaultTheme;
        isTabActive: boolean;
        width: number;
        routesLength: number;
    }) =>
        css`
            height: ${height}px;
            width: ${width / routesLength}px;
            background-color: ${isTabActive ? primary : blackLighter};
            align-items: center;
            justify-content: center;
        `
);

export const TabLabel = styled.Text<{ isTabActive: boolean }>`
    color: ${({
        isTabActive,
        theme: {
            colors: { white, grey },
        },
    }) => (isTabActive ? white : grey)};
`;
