/** @type {plugin | postcss.PluginCreator<string | Config | {config: string | Config}>} */

const plugin = require('tailwindcss')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    plugin(({ addComponents, addUtilities, config }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: 'red',
          border: '1px solid black',
          height: '100px',
          padding: '10px 20px',
          width: '200px',
        },
      })
    }),
  ],
  theme: {
    colors: {
      Accent: {
        100: '#73A5FF',
        300: '#4C8DFF',
        500: '#397DF6',
        700: '#2F68CC',
        900: '#234E99',
      },
      Danger: {
        100: '#FF8099',
        300: '#F23D61',
        500: '#CC1439',
        700: '#990F2B',
        900: '#660A1D',
      },
      Dark: {
        100: '#4C4C4C',
        300: '#333333',
        500: '#171717',
        700: '#0D0D0D',
        900: '#000000',
      },
      Light: {
        100: '#FFFFFF',
        300: '#F7FBFF',
        500: '#EDF3FA',
        700: '#D5DAE0',
        900: '#8D9094',
      },
      Success: {
        100: '#80FFBF',
        300: '#22E584',
        500: '#14CC70',
        700: '#0F9954',
        900: '#0A6638',
      },
      Warning: {
        100: '#FFD073',
        300: '#E5AC39',
        500: '#D99000',
        700: '#D99000',
        900: '#D99000',
      },
    },
    extend: {},
  },
}
