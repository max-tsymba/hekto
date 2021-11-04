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
          '200': '#E7E6EF',
          '300': '#E7E4F8',
          '400': '#9DA0AE',
        },
        'blue': {
          DEFAULT: '#0D0E43',
          '100': '#151875',
        },
        'black': 'black',
        'violet': '#7E33E0',
        'pink': '#FB2E86',
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
      borderRadius: {
        'full': '50%',
      },
      fontFamily: {
        default: ['josefin-sans', 'sans-serif'],
        "lato": ['lato', 'sans-serif'],
      },
      spacing: {
        0: '0px',
        1: '1px',
        2: '2px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        26: '26px',
        34: '36px',
        48: '48px',
        86: '86px',
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
          'w20': '20px',
          'w40': '40px',
          'w50': '50px',
        },
        height: {
          'h20': '20px',
          'h40': '40px',
        },
      },
    },
    variants: {
      extend: {
        textColor: ['hover', 'active',],
        borderColor: ['focus'],
      },
    },
    plugins: [],
  }