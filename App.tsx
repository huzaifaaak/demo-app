import React from 'react';

import { I18NProvider } from './src/i18n';

console.warn = () => {};

export default function App() {
    return <I18NProvider />;
}
