/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "#1EA4CE",
        "custom-blue-200": "#147594",
        "custom-gray-50": "#FAFAFA",
        "custom-gray-100": "#F2F0FD",
        "custom-gray-200": "#FEFEFE",
        "custom-gray-300": "#F3F0FE",
        "custom-gray-400": "#DFDEE2",
        "custom-gray-500": "#697488",
        "custom-gray-700": "#191919",
        "custom-black-50": "#F4F4F4",
        "custom-black-100": "#E0E0E0",
        "custom-black-300": "#A8A8A8",
        "custom-black-400": "#6F6F6F",
        "custom-black-600": "#525252",
      },
    },
  },
  plugins: [],
};
