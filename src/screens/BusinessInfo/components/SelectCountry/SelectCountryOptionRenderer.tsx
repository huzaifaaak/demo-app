import React from 'react';

import { SelectOptionRenderer } from '@components/Select';

import { Country } from '../../BusinessInfo.interface';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCountryOptionRenderer: SelectOptionRenderer<Country> = ({ name, flag }) => {
    return (
        <Wrapper>
            <Emoji>{flag}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
