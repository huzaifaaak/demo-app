import { createTheme } from '@shopify/restyle';

import { baseTheme } from './base-theme';
import { components } from './components';

export const theme = createTheme({
    ...baseTheme,
    ...components,
});

export type Theme = typeof theme;
