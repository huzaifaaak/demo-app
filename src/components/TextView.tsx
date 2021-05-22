import styled, { css } from 'styled-components/native';

export const TextView = styled.Text<{
    link?: boolean;
    divider?: boolean;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    textAlign?: string;
    large?: boolean;
    regular?: boolean;
    small?: boolean;
    boldFont?: boolean;
    semiBoldFont?: boolean;
    regularFont?: boolean;
    lineHeight?: number;
}>(
    ({
        theme: {
            components: { Text },
            colors,
            font,
        },
        divider,
        link,
        mt,
        mb,
        mr,
        ml,
        textAlign = 'center',
        large,
        regular,
        semiBoldFont,
        boldFont,
        lineHeight,
    }) => css`
        font-size: ${large ? Text.large : regular ? Text.regular : Text.small}px;
        font-family: ${boldFont ? font.BOLD : semiBoldFont ? font.SEMI_BOLD : font.REGULAR};
        color: ${link ? colors.primary : divider ? colors.grey : colors.white};
        text-align: ${textAlign};
        line-height: ${lineHeight ?? 21}px;
        margin-top: ${mt ? mt : 0}px;
        margin-bottom: ${mb ? mb : 0}px;
        margin-right: ${mr ? mr : 0}px;
        margin-left: ${ml ? ml : 0}px;
    `
);
