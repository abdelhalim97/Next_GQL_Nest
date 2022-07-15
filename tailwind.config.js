/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'st':({opacityValue})=>`rgba(var(--color-text-st),${opacityValue})`,
        'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
        'th':({opacityValue})=>`rgba(var(--color-text-th),${opacityValue})`,
        'fourth':({opacityValue})=>`rgba(var(--color-text-fourth),${opacityValue})`,
    },
    backgroundColor:{
      'st':({opacityValue})=>`rgba(var(--color-text-st),${opacityValue})`,
      'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
      'th':({opacityValue})=>`rgba(var(--color-text-th),${opacityValue})`,
      'fourth':({opacityValue})=>`rgba(var(--color-text-fourth),${opacityValue})`,
    }
    },
  },
  plugins: [],
}
