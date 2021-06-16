import React from 'react';

import { Box } from '@components/Box';

import { HeaderActionsProps } from './Header.decl';

export function HeaderActions({ children }: HeaderActionsProps) {
    return (
        <Box style={{ marginLeft: 'auto' }} flexDirection="row" flexShrink={1} alignItems="center">
            {children}
        </Box>
    );
}
