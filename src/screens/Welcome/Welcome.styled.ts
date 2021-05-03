import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    padding: ${({
        theme: {
            components: { Container },
        },
    }) => Container.padding}px;
`;

export const Text = styled.Text`
    font-family: 'Poppins-Regular';
    color: white;
    text-align: center;
    font-weight: 400;
    margin-top: 20px;
`;

export const Description = styled(Text)`
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 20px;
`;

export const AccountExist = styled(Text)`
    font-size: 12px;
    line-height: 18px;
`;

export const LoginText = styled(Text)`
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
    color: ${(p) => p.theme.colors.primary};
`;
