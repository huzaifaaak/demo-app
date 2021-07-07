import React from 'react';

import { Box } from '@components/Box';
import { Text } from '@components/Text';

import { Radius } from '@theme/restyle/constants';

import { CategoryOptionsRendererTypes } from '../../createItem.decl';

export const SelectCategoryOptionRenderer = ({ name, color }: CategoryOptionsRendererTypes) => (
    <Box flexDirection="row" width="100%" alignItems="center">
        <Box
            width={25}
            height={25}
            borderRadius={Radius.CURVED}
            mr="m"
            style={{ backgroundColor: color ? color : 'transparent' }}
        />
        <Text>{name}</Text>
    </Box>
);
