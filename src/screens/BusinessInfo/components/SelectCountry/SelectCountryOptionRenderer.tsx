import React from 'react';

import { SelectOptionRenderer } from '@components/Form/Select';

import { Country } from '../../BusinessInfo.decl';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCountryOptionRenderer: SelectOptionRenderer<Country> = ({ name, flag }) => {
    return (
        <Wrapper>
            <Emoji>{flag}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
