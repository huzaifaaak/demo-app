import React from 'react';

import { SelectOptionRenderer } from '@components/Select';

import { Business } from '../../BusinessInfo.interface';
import { Wrapper, Name } from '../../BusinessInfo.styled';

export const SelectCategoryOptionRenderer: SelectOptionRenderer<Business> = ({ type }) => {
    return (
        <Wrapper>
            <Name>{type}</Name>
        </Wrapper>
    );
};
