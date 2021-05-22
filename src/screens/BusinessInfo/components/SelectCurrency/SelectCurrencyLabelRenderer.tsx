import React from 'react';

import { SelectLabelRenderer } from '@components/Form/Select';

import { Currency } from '../../BusinessInfo.decl';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCurrencyLabelRenderer: SelectLabelRenderer<Currency> = ({ name, symbol }) => {
    return (
        <Wrapper>
            <Emoji width={15}>{symbol}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
