/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#ba4949",
        tomatoOpacity: "#c15c5c",
        "short-break": "#38858a",
        "short-break-opacity": "#4c9196",
        "long-break": "#397097",
        "long-break-opacity": "#4d7fa2",
      },
      fontFamily: {
        pomodoroFont: ['"Quicksand"', "serif"],
      },
      boxShadow: {
        "button-shadow": "0px 6px #ebebeb",
      },
    },
  },
  plugins: [],
};
