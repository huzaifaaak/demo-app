import { useCallback, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage(key: string) {
    const [storedValue, storeValue] = useState<string | null>(null);

    useEffect(() => {
        const getValue = async () => {
            try {
                const item = await AsyncStorage.getItem(key);
                storeValue(item);
            } catch (error) {
                storeValue(null);
            }
        };
        getValue();
    }, [key]);

    const setStorageValue = useCallback(
        async (value) => {
            storeValue(value);
            await AsyncStorage.setItem(key, value);
        },
        [storeValue, key]
    );

    return {
        storedValue,
        setStorageValue,
    };
}

export function useSerializedStorage<T>(key: string) {
    const { storedValue, setStorageValue: _setStorageValue } = useStorage(key);

    return useMemo(
        () => ({
            storedValue: (storedValue ? JSON.parse(storedValue) : storedValue) as T | null,
            setStorageValue: (item: T) => _setStorageValue(JSON.stringify(item)),
        }),
        [storedValue, _setStorageValue]
    );
}
