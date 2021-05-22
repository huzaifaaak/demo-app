import React from 'react';

import { Container } from '@components/Container';
import { TextView } from '@components/TextView';

export function Checkout() {
    return (
        <Container justifyContent="center" flexGrow={1}>
            <TextView semiBoldFont regular lineHeight={27}>
                Just, for once, use your imagination and assume this is the checkout section
            </TextView>
        </Container>
    );
}
