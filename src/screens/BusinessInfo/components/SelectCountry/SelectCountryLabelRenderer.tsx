import React from 'react';

import { SelectLabelRenderer } from '@components/Form/Select';

import { Country } from '../../BusinessInfo.decl';
import { Wrapper, Name, Emoji } from '../../BusinessInfo.styled';

export const SelectCountryLabelRenderer: SelectLabelRenderer<Country> = ({ name, flag }) => {
    return (
        <Wrapper>
            <Emoji>{flag}</Emoji>
            <Name>{name}</Name>
        </Wrapper>
    );
};
