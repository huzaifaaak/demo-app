import { useContext, useEffect } from 'react';

import { TabProps } from './Tabs.decl';
import { TabContext } from './context/TabContext';

export function Tab({ tabKey, title, scene }: TabProps) {
    const { routes, setScenes } = useContext(TabContext);

    useEffect(() => {
        routes.current.push({ key: tabKey, title });
        setScenes((scenes) => {
            return {
                ...scenes,
                [tabKey]: scene,
            };
        });
    }, [tabKey, routes, title, setScenes, scene]);
    return null;
}
