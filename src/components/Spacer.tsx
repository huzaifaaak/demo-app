import React, { Children } from 'react';

import { StyleProp, View, ViewStyle } from 'react-native';

export function Spacer({
    space = 20,
    horizontal = false,
    children,
    flex = 1,
    flexGrow = 0,
    itemsFlex = 1,
    style,
}: {
    space?: number;
    horizontal?: boolean;
    children?: React.ReactNode;
    flex?: number;
    flexGrow?: number;
    style?: StyleProp<ViewStyle>;
    itemsFlex?: number;
}) {
    const childrenLength = Children.count(children);

    return (
        <View
            style={{
                flex,
                flexGrow,
                flexDirection: horizontal ? 'row' : 'column',
                justifyContent: 'flex-start',
                ...(style as Record<string, any>),
            }}>
            {Children.map(children, (child, index) => {
                const marginPos = horizontal ? 'marginRight' : 'marginBottom';
                const marginValue = index === childrenLength - 1 ? 0 : space;

                const newChild = child as React.ReactElement;
                const newChildType = newChild?.type as any;

                if (newChild && newChildType?.name === 'FormError') {
                    console.log('FormError in spacer', newChild);
                }

                if (
                    newChild &&
                    (newChildType?.name !== 'FormError' ||
                        (newChildType?.name === 'FormError' && newChild?.props?.children))
                ) {
                    return (
                        <View style={{ [marginPos]: marginValue, flex: itemsFlex }}>{child}</View>
                    );
                }

                return null;
            })}
        </View>
    );
}
