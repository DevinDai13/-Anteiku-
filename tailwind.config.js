const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      yellow: colors.yellow,
      sky: colors.sky,
      gray: colors.gray,
      orange: colors.orange,
    },
    extend: {
      borderRadius: {
        extraLarge: '12rem',
        Large: '8rem'
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-left': {
          '0%': {
              opacity: '0',
              transform: 'translateX(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
      }
    },
    animation: {
      'fade-in-down': 'fade-in-left 0.5s ease-out',
      'fade-in-left': 'fade-in-left 0.5s ease-out'
    }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
