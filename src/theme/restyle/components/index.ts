import { BannerComponent } from './Banner.component';
import { BottomSheetComponent } from './BottomSheet.component';
import { ButtonComponent } from './Button.component';
import { ColorRandomizerComponent } from './ColorRandomizer.component';
import { HeaderComponent } from './Header.component';
import { IconComponent } from './Icon.component';
import { MultilineComponent } from './Multiline.component';
import { SelectComponent } from './Select.component';
import { TextComponent } from './Text.component';
import { TextInputComponent } from './TextInput.component';

export const components = {
    ...TextComponent,
    ...BannerComponent,
    ...BottomSheetComponent,
    ...ButtonComponent,
    ...ColorRandomizerComponent,
    ...TextInputComponent,
    ...MultilineComponent,
    ...IconComponent,
    ...HeaderComponent,
    ...SelectComponent,
};
