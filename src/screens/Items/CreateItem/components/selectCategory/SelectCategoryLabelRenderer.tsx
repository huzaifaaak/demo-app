import React from 'react';

import { Box } from '@components/Box';
import { Text } from '@components/Text';

import { Radius } from '@theme/restyle/constants';

import { CategoryLabelRendererTypes } from '../../createItem.decl';

export const SelectCategoryLabelRenderer = ({ color, name }: CategoryLabelRendererTypes) => {
    return (
        <Box flexDirection="row" width="100%" justifyContent="center" alignItems="center">
            <Box
                width={25}
                height={25}
                borderRadius={Radius.CURVED}
                mr="m"
                style={{ backgroundColor: color }}
            />
            <Text>{name}</Text>
        </Box>
    );
};
