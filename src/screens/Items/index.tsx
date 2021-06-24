import React, { useCallback, useMemo } from 'react';

import { FlatList } from 'react-native';

import IconArrowRightLine from '@icons/ArrowRightLine';
import IconErrorWarningFill from '@icons/ErrorWarningFill';

import { EmptyItems } from '@assets/images/emptyItems';

import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Text } from '@components/Text';

import { useSWR } from '@hooks/useSWR';
import { useTranslation } from '@hooks/useTranslation';

import { Item } from './components/item';

export const Items = React.memo(function () {
    const { tc, te } = useTranslation();

    const { data: items, error: error, revalidate } = useSWR('/items/list', {});

    const ErrorLoading = () => (
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
    const EmptyItem = () => (
        <Box alignItems="center">
            <Spacer flex={0} itemsFlex={0} style={{ alignItems: 'center' }}>
                <EmptyItems />
                <Text textAlign="center" fontWeight="bold">
                    {tc('product.empty')}
                </Text>
                <Box flexDirection="row">
                    <Text variant="link">Add your first item</Text>
                    <Icon ml="m" fill="primary" icon={IconArrowRightLine} />
                </Box>
            </Spacer>
        </Box>
    );
    const isEmpty = useMemo(() => items?.length === 0, [items]);
    const justification = useMemo(() => (error ? 'center' : 'flex-start'), [error]);
    const ListEmptyComponent = useCallback(() => <EmptyItem />, []);
    return (
        <Box flex={1} justifyContent={justification}>
            {error && <ErrorLoading />}
            {!error && (
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={
                        isEmpty && {
                            flexGrow: 1,
                            justifyContent: 'center',
                        }
                    }
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={() => <></>}
                />
            )}
        </Box>
    );
});
