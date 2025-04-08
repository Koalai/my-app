/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/header_bg.png')",
        "hero-bg-2": "url('/header_bg_2.png')",
        "banner-bg": "url('/product_banner_2.png')",
        "banner-ecommere-bg": "url('/header_bg_ecommerce.png')",
        "banner-real-estate3": "url('/real_estate_3/bg_banner.png')",
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
        "scroll-reverse": "scrollReverse 25s linear infinite"
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          "0%": { transform: "translateX(-50%)" }, 
          "100%": { transform: "translateX(0)" }, 
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
}

