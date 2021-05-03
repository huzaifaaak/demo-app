import React from 'react';

import { SelectLabelRenderer } from '@components/Select';

import { Country } from '../../BusinessInfo.interface';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCountryLabelRenderer: SelectLabelRenderer<Country> = ({ name, flag }) => {
    return (
        <Wrapper>
            <Emoji>{flag}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
