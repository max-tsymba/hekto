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
        },
        'blue': {
          DEFAULT: '#0D0E43',
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
          'w40': '40px',
          'w50': '50px',
        },
        height: {
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