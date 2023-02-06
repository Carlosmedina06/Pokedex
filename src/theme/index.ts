import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme(
  {
    colors: {
      primary: {
        50: '#E3F2FD',
        100: '#BBDEFB',
        200: '#90CAF9',
        300: '#64B5F6',
        400: '#42A5F5',
        500: '#2196F3',
        600: '#1E88E5',
        700: '#1976D2',
        800: '#1565C0',
        900: '#0D47A1',
      },
      secondary: {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
      },
    },
  },
  { config },
)

type CustomThemeType = typeof customTheme

declare module 'native-base' {
  // eslint-disable-next-line prettier/prettier
  interface ICustomTheme extends CustomThemeType { }
}

export default customTheme
