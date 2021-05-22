import React from 'react';

import { SelectOptionRenderer } from '@components/Form/Select';

import { Currency } from '../../BusinessInfo.decl';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCurrencyOptionRenderer: SelectOptionRenderer<Currency> = ({
    symbol,
    name,
    code,
}) => {
    return (
        <Wrapper key={code}>
            <Emoji width={45}>{symbol}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
