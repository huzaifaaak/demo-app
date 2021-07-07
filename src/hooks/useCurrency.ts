import { useMetaInfo } from '@meta';

import { CurrenciesList } from '@constants/currency';

export function useCurrency() {
    const { vendor } = useMetaInfo();
    const currency = vendor?.currency;
    const symbol = CurrenciesList?.[currency]?.symbol_native;
    return {
        currency,
        symbol,
    };
}
