import React from 'react';

import IconAccountBoxFill from '@icons/AccountBoxFill';

import { BottomSheet, useBottomSheet } from '@components/BottomSheet';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';

import { ActionButton, Label } from './Product.styled';

const BOTTOM_SHEET_NAME = 'product';

export function Product() {
    const { expand, close } = useBottomSheet(BOTTOM_SHEET_NAME);

    return (
        <Container>
            <Button onPress={expand}>Open sheet</Button>
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
        </Container>
    );
}
