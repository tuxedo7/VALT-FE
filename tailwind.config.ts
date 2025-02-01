/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': {
          min: "0px",
          max: "767px",
        },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {
          min: "767px",
          max: "1440px",
        },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': {
          min: "1441px",
          max: "2700px",
        },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        // xl: {
        //   min: "1201px",
        //   max: "1400px",
        // },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      fontSize: {
        '2sm': ['12px', {
          lineHeight: '18.6px',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        sm: ['14px', {
          lineHeight: '16px',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        base: ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        lg: ['16px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        xl: '18px',
        '2xl': ['20px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        '3xl': '26px',
        '4xl': '36px',
        '5xl': '64px',
      },
      colors: {
        mainDark: '#141416',
        greyfont: "#818898",
        darkBackground: "#0D0D0D",
        darkPrimary: "#202125",
        primaryColor: "#f2f3f5",
        deepPink: "#FF1493",
        fontPrimary: "#a7b2c1",
        fontSecondary: "#9094a6",
        modalBackground: "#171717",
        black_dark: "#1a1a1a",
        black_light: "#363636",
        black_medium: "#252525",
        gray_default: "#a4a4a4",
        discord_indigo: "#7289da",
        mainPink: "#DD00AC",
        grayColor: '#777E90',
        greenColor: '#58BD7D',
        grayBackgroundColor: '#353945',
        grayWhiteColor: '#E6E8EC',
        blueTextColor: '#3772FF',
        pinkColor: '#9757D7',
        yellowColor: '#FFD166',
        redColor: '#FF6666',
        darkGrayColor: '#18191D',
        grayTextColor: '#B1B5C3',
        darkgrayBackgroundColor: '#23262F',
        whiteTextColor: '#FCFCFD',
        darkDarkColor: '#18191D'
      },
      borderColor: (theme: any) => ({
        ...theme("colors"),
        primary: "#2F3037",
      }),
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        'Poppins': ["Poppins", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      aspectRatio: {
        "custom-768-1152": "768/1152",
        "custom-16-10": "16/10",
      },
      padding: {
        'lg-ctn-px': '160px',
        'md-ctn-px': '24px',
        'sm-ctn-px': '15px',
        'ctn-py': '24px',
      }
    },
  },
  plugins: [],
}