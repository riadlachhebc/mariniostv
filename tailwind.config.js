/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f5f6f7',        // Light gray background — gallery foundation
          surface: '#ffffff',   // Pure white for sections
          surface2: '#eff1f2',  // Tonal layering
          subtle: 'rgba(117, 119, 120, 0.1)',    // outline — felt, not seen
          line: 'rgba(171, 173, 174, 0.15)',      // ghost borders

          primary: '#6a1cf6',        // ⚡️ The Electric Pulse — primary purple
          primaryHover: '#5d00e3',
          primaryContainer: '#ac8eff',
          secondary: '#00675d',      // 🟢 Secondary — The Accent Depth (Teal)
          secondaryHover: '#005b51',
          tertiary: '#9b3666',      // 💖 Tertiary — Action pop (Magenta)

          text: '#2c2f30',      // High-contrast editorial text
          muted: '#595c5d',     // Secondary text
          faint: '#757778',     // Placeholders, hints

          success: '#00675d',
          warning: '#f6bf26',
          danger: '#b41340',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'eight': '0.5rem',      // ROUND_EIGHT
        'xl': '1.5rem',        // High-end curves
      },
      boxShadow: {
        glow: '0 0 40px rgba(106, 28, 246, 0.1)', // Ambient glow
        soft: '0 12px 32px -4px rgba(25, 28, 29, 0.06)', // Elevated editorial shadow
        card: '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6a1cf6 0%, #ac8eff 100%)',
        'glass': 'rgba(255, 255, 255, 0.8)',
        'hero-radial': 'radial-gradient(ellipse at top, rgba(106, 28, 246, 0.05), transparent 60%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}