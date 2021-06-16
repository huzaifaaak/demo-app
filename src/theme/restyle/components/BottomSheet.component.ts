import { Color } from '@theme/colors';
import { component } from '@theme/creator';

export const BottomSheetComponent = component('BottomSheet', {
    backgroundColor: Color.blackDark,
    handle: {
        backgroundColor: Color.greyDarker,
        height: 7,
        width: 50,
    },
}).seal();
