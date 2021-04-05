module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        grotesk: ['grotesk','sans-serif']
      },
      colors:{
        black:{
          100: '#e8e8e8',
          200: '#d3d5dc',
          300: '#8b8687',
          400: '#333030',
          500: '#000000'
        },
        purple:{
          100: '#d4d2eb',
          200: '#a28af0',
          300: '#2f2d52'
        },
        green:{
          100: '#96dec6',
          200: '#72dcb9'
        },
        orange: '#fdc096'

      },
      fontSize:{
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
