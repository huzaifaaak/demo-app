import React from 'react';

import IconAccountBoxFill from '@icons/AccountBoxFill';
import IconAddFill from '@icons/AddFill';

import { BottomSheet, useBottomSheet } from '@components/BottomSheet';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Header } from '@components/Header';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Tabs, TabProvider, Tab } from '@components/Tabs';

import { Checkout } from '@screens/Checkout';
import { Items } from '@screens/Items';

import { ActionButton, Label } from './Product.styled';

const BOTTOM_SHEET_NAME = 'product';

export function Product() {
    const { expand, close } = useBottomSheet(BOTTOM_SHEET_NAME);

    return (
        <>
            <TabProvider>
                <Box flex={1} style={{ padding: 20 }}>
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
            </TabProvider>
            <BottomSheet maxSnap={'30%'} id={BOTTOM_SHEET_NAME}>
                <Container>
                    <Spacer space={10}>
                        <Spacer horizontal space={10}>
                            <ActionButton>
                                <Icon icon={IconAccountBoxFill} />
                                <Label>Create item</Label>
                            </ActionButton>
                            <ActionButton>
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
