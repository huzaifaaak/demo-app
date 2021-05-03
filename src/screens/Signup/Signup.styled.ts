import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => {
    return {
        contentContainerStyle: {
            justifyContent: 'center',
        },
    };
})`
    flex: 1;
    padding: ${({
        theme: {
            components: { Container },
        },
    }) => Container.padding}px;
    padding-top: 0px;
`;

export const Text = styled.Text<{
    link?: boolean;
    divider?: boolean;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
}>(
    ({
        theme: {
            components: { Text },
            colors,
        },
        divider,
        link,
        mt,
        mb,
        mr,
        ml,
    }) => css`
        font-size: ${Text.small}px;
        color: ${link ? colors.primary : divider ? colors.grey : colors.white};
        text-align: center;
        line-height: 21px;
        margin-top: ${mt ? mt : 0}px;
        margin-bottom: ${mb ? mb : 0}px;
        margin-right: ${mr ? mr : 0}px;
        margin-left: ${ml ? ml : 0}px;
    `
);

export const DividerView = styled.View`
    flex-direction: row;
    width: 100%;
    margin: 25px 0px 20px 0px;
    align-items: center;
`;

export const Divider = styled.View`
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.blackLight};
`;

export const Wrapper = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

export const InputWrapper = styled.View`
    margin: 20px 0px 0px 0px;
`;

export const InputDivider = styled.View`
    flex: 1;
    margin-right: 15px;
`;

export const BannerView = styled.View`
    margin-top: 25px;
`;
