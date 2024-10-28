import type { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

import { createTheme,
} from '@mantine/core';

type ExtendedCustomColors =
    | 'primary'
    | 'secondary'
    | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

const primary: MantineColorsTuple = [
    '#f1f1ff',
    '#e0dff2',
    '#bfbdde',
    '#9b98ca',
    '#7d79b9',
    '#6a66af',
    '#605cac',
    '#504c97',
    '#464388',
    '#3b3979',
];

const secondary: MantineColorsTuple = [
    '#fdfce4',
    '#f8f6d3',
    '#f0ecaa',
    '#e7e17c',
    '#e0d856',
    '#dbd33e',
    '#d9d02f',
    '#c0b820',
    '#aaa317',
    '#928d03',
];

export default createTheme({
    colors: {
        primary,
        secondary,
    },
    primaryColor: 'primary',
});
