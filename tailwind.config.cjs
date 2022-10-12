module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/**/*.tsx",
    "./src/**/**/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },
        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          400: '#7c7c8a',
          800: '#202024',
          900: '#121214',
        },
        cyan: {
          300: '#ABD8F7',
          500: '#81D8F7',
        }
      },
      borderRadius: {
        md: '4px'
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
