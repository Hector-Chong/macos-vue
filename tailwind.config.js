module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.625rem',
      'sm': '.6875rem',
      'tiny': '.6875rem',
      'base': '.8125rem',
      'lg': '.938rem',
      'xl': '1.063rem',
      '2xl': '1.375rem',
      '3xl': '1.625rem',
      '4xl': '1.875rem',
      '5xl': '2.188rem',
      '6xl': '2.5rem',
      '7xl': '3.75rem',
      '8xl': '6.75rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
