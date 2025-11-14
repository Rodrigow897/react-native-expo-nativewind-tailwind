module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",       // Inclui os arquivos dentro de src/app
    "./src/components/**/*.{js,jsx,ts,tsx}" // Inclui os componentes
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },

  plugins: [],

  // 🔥 Necessário para usar `className` no expo-image
  future: {
    nativeWind: {
      components: {
        "expo-image": ["Image"],  // Mapeia o componente do expo-image
      },
    },
  },
};
