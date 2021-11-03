module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        'current': 'currentColor',
        'transparent': 'transparent',
        'white': {
          DEFAULT: 'white',
          '100': '#F1F1F1',
        },
        'black': 'black',
        'violet': '#7E33E0',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1240px',
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          'desktop': '1200px',
        },
      },
      fontSize: {
        'sm': '16px',
      },
      lineHeight: {
        '125': '1.25',
      },
      fontFamily: {
        default: ['josefin-sans', 'sans-serif'],
      },
      spacing: {
        0: '0px',
        1: '1px',
        2: '2px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        26: '26px',
        48: '48px',
      },
      maxWidth: {

      },
      minWidth: {

      },
      maxHeight: {

      },
      minHeight: {

      },
      extend: {
        width: {
        },
        height: {
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }