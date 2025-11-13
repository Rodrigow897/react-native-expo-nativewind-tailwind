module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",  // Inclui todos os arquivos dentro de src/app
    "./src/components/**/*.{js,jsx,ts,tsx}", // Inclui os componentes
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
