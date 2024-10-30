import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'general-sans': ['"General Sans"', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '2rem',
        'custom-xl': '3rem',
        'custom-2xl': '4rem',
        'custom-3xl': '5rem',
      },
      lineHeight: {
        'custom-tight': '1.1',
      },
      colors: {
        customBlue: '#031356',
        customTeal: '#01737F',
        customGray: '#96A0B5',
        customBlack: '#0C0A0A',
        customGray2: '#D9D9D9',
        customgradient: '#0C0A0A',
        titleColor: '#101010', // Cor do título
        buttonBgColor: '#0C0A0A', // Cor de fundo do botão
        buttonBorderColor: '#0C0A0A', // Cor da borda do botão
      },
    },
  },
  plugins: [],
}

export default config
