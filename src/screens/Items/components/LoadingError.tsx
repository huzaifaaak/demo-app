import React from 'react';

import IconErrorWarningFill from '@icons/ErrorWarningFill';

import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Text } from '@components/Text';

import { useTranslation } from '@hooks/useTranslation';

export const LoadingError = ({ revalidate }: { revalidate: () => Promise<boolean> }) => {
    const { te } = useTranslation();
    return (
        <Box>
            <Spacer space={10} flex={0} itemsFlex={0}>
                <Icon alignSelf="center" size={40} fill="red" icon={IconErrorWarningFill} />
                <Text color="red" textAlign="center">
                    {te('products.items.loading')}
                </Text>
                <Button onPress={revalidate}>Try again</Button>
                <Button variant="ghost">Contact Support</Button>
            </Spacer>
        </Box>
    );
};
