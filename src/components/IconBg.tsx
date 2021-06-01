import styled, { css } from 'styled-components/native';

export const IconBg = styled.TouchableOpacity(
    ({
        theme: {
            components: {
                Header: { iconBgBorder, iconBgHeight, iconBgWidth },
            },
            colors: { blackLighter },
        },
    }) => css`
        height: ${iconBgHeight}px;
        width: ${iconBgWidth}px;
        background-color: ${blackLighter};
        align-items: center;
        justify-content: center;
        border-radius: ${iconBgBorder}px;
    `
);
