import { Color } from '@theme/colors';
import { component } from '@theme/creator';
import { Font } from '@theme/fonts';

export const TextComponent = component('Text', {
    color: Color.white,
    fontSize: 14,
    fontFamily: Font.REGULAR,
    lineHeight: 21,
})
    .variant('heading', {
        fontSize: 24,
        fontFamily: Font.BOLD,
        lineHeight: 31,
    })
    .variant('subheading', {
        fontSize: 18,
        fontFamily: Font.SEMI_BOLD,
        lineHeight: 25,
    })
    .variant('link', {
        color: Color.primaryLight,
    })
    .seal();
