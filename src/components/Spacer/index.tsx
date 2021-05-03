import React, { Children } from 'react';

import { View } from 'react-native';

export function Spacer({
    space = 20,
    horizontal = false,
    children,
}: {
    space?: number;
    horizontal?: boolean;
    children?: React.ReactNode;
}) {
    const childrenLength = Children.count(children);

    return (
        <>
            {Children.map(children, (child, index) => {
                const marginPos = horizontal ? 'marginRight' : 'marginBottom';
                const marginValue = index === childrenLength - 1 ? 0 : space;

                return <View style={{ flexGrow: 1, [marginPos]: marginValue }}>{child}</View>;
            })}
        </>
    );
}
