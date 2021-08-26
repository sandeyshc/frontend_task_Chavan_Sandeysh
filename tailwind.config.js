module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '9': 'repeat(9, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
