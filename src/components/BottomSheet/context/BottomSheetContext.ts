import { createContext } from 'react';

import Sheet from '@gorhom/bottom-sheet';

import { noop } from '@components/utils';

export const BottomSheetContext = createContext<{
    getSheetRef(id: string | number): Sheet | undefined;
    createSheetRef(id: string | number): (ref: Sheet) => void;
}>({
    getSheetRef: () => undefined,
    createSheetRef: () => noop,
});
