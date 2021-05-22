import styled from 'styled-components/native';

export const SubContainer = styled.View`
    padding: ${({
        theme: {
            components: {
                Container: { padding },
            },
        },
    }) => padding}px;
    padding-top: 0px;
`;
