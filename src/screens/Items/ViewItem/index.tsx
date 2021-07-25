import React, { useCallback } from 'react';

import { StyleSheet } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import { useNavigation } from '@react-navigation/native';

import IconDeleteBin6Line from '@icons/DeleteBin6Line';
import IconPencilLine from '@icons/PencilLine';

import { Box } from '@components/Box';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { Text } from '@components/Text';

import { Routes } from '@constants/routes';

import { Color, colors } from '@theme/colors';
import { Radius, Spacing } from '@theme/restyle/constants';

import { useCurrency } from '@hooks/useCurrency';
import { useSWR } from '@hooks/useSWR';

import { LoadingError } from '../components/LoadingError';

export const ViewItem = React.memo(function ({ route }: { route: any }) {
    const { goBack } = useNavigation();
    const { currency } = useCurrency();

    const { id } = route.params;
    const { data: item, error, revalidate } = useSWR(`/items/${id}`, {});

    const { navigate } = useNavigation();

    const goToEdit = useCallback(
        () => navigate(Routes.App.CREATE_ITEM, { defaultValue: item, type: 'edit' }),
        [navigate, item]
    );

    const { mutate, data: items } = useSWR('/items/list', {});

    const deleteItem = () => {
        goBack();
    };

    if (!item && !error) {
        return (
            <SkeletonContent
                containerStyle={{ flex: 1, width: '100%', padding: 20 }}
                boneColor={colors.blackDark}
                highlightColor={colors.blackLight}
                isLoading={true}
                layout={[
                    { key: 'someId', ...styles.line1 },
                    { key: 'someOtherId', ...styles.line2 },
                    { key: 'someOtherId2', ...styles.line3 },
                    { key: 'someOtherId3', ...styles.line4 },
                    { key: 'someOtherId4', ...styles.line5 },
                ]}
            />
        );
    }

    if (error) {
        return (
            <Box flex={1} justifyContent="center" padding={Spacing.XLARGE}>
                <Box position="absolute" top={0} mt="xl" alignSelf="center">
                    <Header onBack={goBack}>
                        <Header.Title>View item</Header.Title>
                        <Header.Actions />
                    </Header>
                </Box>
                <LoadingError revalidate={revalidate} />
            </Box>
        );
    }

    return (
        <>
            <Box padding={Spacing.XLARGE}>
                <Spacer flex={0} itemsFlex={0}>
                    <Header onBack={goBack}>
                        <Header.Title>View item</Header.Title>
                        <Header.Actions>
                            <Header.Action icon={IconDeleteBin6Line} />
                            <Header.Action icon={IconPencilLine} onPress={goToEdit} />
                        </Header.Actions>
                    </Header>
                    {!error && (
                        <Spacer flex={0} itemsFlex={0}>
                            <Text variant="subheading">{item?.name}</Text>
                            <Box flexDirection="row" alignItems="center">
                                <Box
                                    height={25}
                                    width={25}
                                    borderRadius={Radius.REGULAR}
                                    marginRight={Spacing.MEDIUM}
                                    style={{ backgroundColor: item?.category?.color }}
                                />
                                <Text>{item?.category?.name}</Text>
                            </Box>
                            <Box>
                                <Text>{item?.description}</Text>
                            </Box>
                            <Box style={{ overflow: 'hidden' }}>
                                <Spacer flex={0} itemsFlex={1} horizontal space={2}>
                                    <Box
                                        backgroundColor={Color.black}
                                        borderRadius={Radius.REGULAR}
                                        alignItems="center"
                                        justifyContent="center"
                                        p={Spacing.MEDIUM}>
                                        <Text mb={Spacing.XSMALL} variant="ghost">
                                            Price
                                        </Text>
                                        <Text variant="subheading">
                                            {currency} {item?.price}
                                        </Text>
                                    </Box>
                                </Spacer>
                            </Box>
                        </Spacer>
                    )}
                </Spacer>
            </Box>
        </>
    );
});

const styles = StyleSheet.create({
    line1: {
        width: '100%',
        height: 27,
        marginTop: 20,
    },
    line2: {
        width: '100%',
        height: 27,
        marginTop: 20,
    },
    line3: {
        width: '100%',
        height: 54,
        marginTop: 20,
    },
    line4: {
        width: '100%',
        height: 75,
        marginTop: 20,
    },
    line5: { width: '100%', height: 125, marginTop: 20 },
});
