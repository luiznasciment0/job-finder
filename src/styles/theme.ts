export default {
  colors: {
    mainBg: '#F6F7FB',
    black: '#282538',
    palegray: '#B9BDCF',
    white: '#FFFFFF',
    blue: '#1E86FF',
    darkBlue: '#334680'
  },
  font: {
    family: {
      primary: `'Poppins', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;`,
      secondary: `'Roboto', sans-serif`,
      tertiary: `'Montserrat', sans-serif`
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xlarge: '2.4rem'
    }
  }
} as const
