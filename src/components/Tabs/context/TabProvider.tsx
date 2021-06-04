import React, { MutableRefObject, ReactNode, useMemo, useRef, useState } from 'react';

import { IRoute, IScene } from '../Tabs.decl';

import { TabContext } from './TabContext';

export function TabProvider({ children }: { children: ReactNode }) {
    const [index, setIndex] = useState(0);

    const routes = useRef<[] | MutableRefObject<IRoute>[]>([]);
    const [scenes, setScenes] = useState<Record<string, unknown> | IScene>({});
    const contextValues = useMemo(
        () => ({
            index,
            routes,
            scenes,
            setScenes,
            setIndex,
        }),
        [index, routes, scenes]
    );
    return <TabContext.Provider value={contextValues}>{children}</TabContext.Provider>;
}
