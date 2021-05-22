import React from 'react';

import { SelectLabelRenderer } from '@components/Form/Select';

import { Business } from '../../BusinessInfo.decl';
import { Wrapper, Name } from '../../BusinessInfo.styled';

export const SelectCategoryLabelRenderer: SelectLabelRenderer<Business> = ({ type }) => {
    return (
        <Wrapper>
            <Name>{type}</Name>
        </Wrapper>
    );
};
