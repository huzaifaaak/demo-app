import { useState } from 'react';

import { getCountry } from 'react-native-localize';

import { countryToCurrencyMap } from '@constants/countryToCurrencyMap';

export function useLocale() {
    const [deviceCountry] = useState(getCountry());
    const [deviceCurrency] = useState(() => {
        const country = getCountry();
        const currency = countryToCurrencyMap.find((c) => c.CountryCode === country);
        return currency?.Code;
    });

    return {
        deviceCountry,
        deviceCurrency,
    };
}
