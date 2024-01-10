/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-accent": "#faf9f8",
        "typography-default": "#222",
        "accent-color": "#e71321",
        "footer-color": "#181818",
      },
      maxHeight: {
        '0': '0',
        full: '100%',
      },

    },
  },
  plugins: [],
};
