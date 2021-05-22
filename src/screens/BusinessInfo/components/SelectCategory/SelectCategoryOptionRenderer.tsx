import React from 'react';

import { SelectOptionRenderer } from '@components/Form/Select';

import { Business } from '../../BusinessInfo.decl';
import { Wrapper, Name } from '../../BusinessInfo.styled';

export const SelectCategoryOptionRenderer: SelectOptionRenderer<Business> = ({ type }) => {
    return (
        <Wrapper>
            <Name>{type}</Name>
        </Wrapper>
    );
};
