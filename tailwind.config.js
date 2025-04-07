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

