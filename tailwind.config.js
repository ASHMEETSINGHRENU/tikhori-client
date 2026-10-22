/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comptoir: {
          orange: '#E85A18',
          orangeDark: '#C9460C',
          maroon: '#4A121A',
          maroonLight: '#6B1B26',
          yellow: '#FCE74C',
          yellowGold: '#E6A817',
          pink: '#E62E6B',
          pinkLight: '#FF5C93',
          teal: '#009E96',
          tealDark: '#0D4744',
          cream: '#FBF6ED',
          creamLight: '#FFFDF9',
          mustard: '#A38E37',
        },
        terracotta: {
          DEFAULT: '#8C2F16',
          light: '#A63B1E',
          dark: '#6E230E',
          deep: '#571B0A'
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#F3C065',
          dark: '#B58229',
          amber: '#FAAE33'
        },
        cream: {
          DEFAULT: '#F8F1E5',
          light: '#FFFDF9',
          dark: '#EDE3D1',
          warm: '#F4ECE0'
        },
        roasted: {
          DEFAULT: '#4A3528',
          light: '#654B3A',
          dark: '#352419'
        }
      },
      fontFamily: {
        fatface: ['Abril Fatface', 'cursive'],
        fraunces: ['Fraunces', 'serif'],
        display: ['Fraunces', 'Abril Fatface', 'Playfair Display', 'serif'],
        serif: ['Playfair Display', 'Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      }
    },
  },
  plugins: [],
}
