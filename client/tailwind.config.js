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
          '500': '#EEEFFB',
          '600': '#F6F5FF',
        },
        'blue': {
          DEFAULT: '#0D0E43',
          '100': '#151875',
          '200': '#101750',
          '300': '#152970',
        },
        'black': 'black',
        'violet': '#7E33E0',
        'pink': '#FB2E86',
        'subtext': '#8A8FB9',
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
          'desktop': '1300px',
        },
      },
      fontSize: {
        'sm': '16px',
        'md': '22px',
        'md-s': '24px',
        'xl': '36px',
      },
      lineHeight: {
        '12': '1.2',
        '125': '1.25',
        '16': '1.6',
        '17': '1.7',
      },
      borderRadius: {
        '4': '4px',
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
        30: '30px',
        34: '36px',
        40: '40px',
        42: '42px',
        48: '48px',
        60: '60px',
        86: '86px',
        100: '100px',
        124: '124px',
      },
      maxWidth: {
        '380': '380px',
      },
      minWidth: {

      },
      maxHeight: {
      },
      minHeight: {
        '280': '280px',
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
        opacity: ['hover'],
      },
    },
    plugins: [],
  }