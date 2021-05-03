import React from 'react';

import { SelectLabelRenderer } from '@components/Select';

import { Business } from '../../BusinessInfo.interface';
import { Wrapper, Name } from '../../BusinessInfo.styled';

export const SelectCategoryLabelRenderer: SelectLabelRenderer<Business> = ({ type }) => {
    return (
        <Wrapper>
            <Name>{type}</Name>
        </Wrapper>
    );
};
