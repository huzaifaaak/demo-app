import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const SubContainer = styled.View`
    padding: ${({
        theme: {
            components: {
                Container: { padding },
            },
        },
    }) => padding}px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.Text`
    margin-right: 15px;
`;

export const Emoji = styled.Text<{
    width?: number;
}>`
    margin-right: 15px;
    min-width: ${({ width }) => (width ? width : 0)}px;
`;

export const Details = styled.Text`
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: left;
`;

export const ButtonWrapper = styled.View`
    margin-bottom: 20px;
`;
