import React from 'react';

import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import IconAccountBoxFill from '@icons/AccountBoxFill';
import IconAddFill from '@icons/AddFill';

import { BottomSheet, useBottomSheet } from '@components/BottomSheet';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Header } from '@components/Header';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Tabs, Tab } from '@components/Tabs';

import { Routes } from '@constants/routes';

import { Checkout } from '@screens/Checkout';
import { Items } from '@screens/Items';

import { Spacing } from '@theme/restyle/constants';

import { ActionButton, Label } from './Product.styled';

const BOTTOM_SHEET_NAME = 'product';

export function Product() {
    const { expand, close } = useBottomSheet(BOTTOM_SHEET_NAME);

    const { navigate } = useNavigation();

    const goToCreateItem = () => {
        console.log('ok ? ');
        navigate(Routes.App.CREATE_ITEM);
    };

    return (
        <>
            <Box flex={1} p={Spacing.MEDIUM}>
                <Header>
                    <Header.Title>Products</Header.Title>
                    <Header.Actions>
                        <Header.Action onPress={expand} icon={IconAddFill} />
                    </Header.Actions>
                </Header>
                <Tabs style={{ marginTop: 20 }}>
                    <Tab tabKey="Items" title="Items" scene={Items} />
                    <Tab tabKey="Categories" title="Categories" scene={Checkout} />
                </Tabs>
            </Box>
            <Button onPress={goToCreateItem}>Create item</Button>
            <BottomSheet maxSnap={'30%'} id={BOTTOM_SHEET_NAME}>
                <Container>
                    <Spacer space={10}>
                        <Spacer horizontal space={10}>
                            <ActionButton onPress={goToCreateItem}>
                                <Icon icon={IconAccountBoxFill} />
                                <Label>Create item</Label>
                            </ActionButton>
                            <ActionButton onPress={() => alert('zzz')}>
                                <Icon icon={IconAccountBoxFill} />
                                <Label>Create category</Label>
                            </ActionButton>
                        </Spacer>
                        <Button onPress={close}>Cancel</Button>
                    </Spacer>
                </Container>
            </BottomSheet>
        </>
    );
}
