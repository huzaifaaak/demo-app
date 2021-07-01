import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';

import { I18NProvider } from './src/i18n';

export default function App() {
    useEffect(() => {
        RNAsyncStorageFlipper(AsyncStorage);
    }, []);
    return <I18NProvider />;
}
