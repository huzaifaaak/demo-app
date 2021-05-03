import styled, { css } from 'styled-components/native';

export const ErrorText = styled.Text(
    ({ theme: { colors, font } }) => css`
        color: ${colors.red};
        font-family: ${font.REGULAR};
        margin-top: 5px;
    `
);
