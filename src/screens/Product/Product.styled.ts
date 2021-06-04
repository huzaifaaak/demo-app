import styled from 'styled-components/native';

export const ActionButton = styled.TouchableOpacity(
    ({
        theme: {
            components: {
                product: { actionButtonHeight },
            },
            colors: { blackLighter },
        },
    }) => `
        height: ${actionButtonHeight}px;
    flex-grow: 1;
    background-color: ${blackLighter};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`
);

export const Label = styled.Text`
    margin-top: 10px;
`;
