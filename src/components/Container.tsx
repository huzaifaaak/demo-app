import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs(
    (props: {
        justifyItems?: string;
        justifyContent?: string;
        flexGrow?: number;
        alignItems?: string;
    }) => {
        const { justifyContent = 'center', flexGrow = 0 } = props;
        return {
            contentContainerStyle: {
                justifyContent,
                flexGrow,
            },
        };
    }
)(
    ({
        theme: {
            components: {
                Container: { padding },
            },
        },
    }) => css`
        flex: 1;
        padding: ${padding}px;
    `
);
