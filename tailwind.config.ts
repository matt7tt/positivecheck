import type { Config } from "tailwindcss";

// Positive Check design system palette. Source: styles/pc-tokens.css.
const pc = {
  navy: "#191c3b",
  "navy-raised": "#222648",
  magenta: "#c756d9",
  pink: "#f598ff",
  cloud: "#f2f2f4",
  slate: "#8a8fa3",
  ink: "#191c3b",
  "ink-muted": "#5b6078",
  "ink-subtle": "#8a8fa3",
  "ink-inverse": "#ffffff",
  surface: "#ffffff",
  "surface-subtle": "#f2f2f4",
  "surface-raised": "#ffffff",
  "surface-inverse": "#191c3b",
  accent: "#c756d9",
  "accent-hover": "#d980e6",
  "on-accent": "#191c3b",
  "accent-text": "#9c2fb0",
  "accent-soft": "#f8eafb",
  border: "#e2e3e8",
  "border-control": "#8a8fa3",
  focus: "#9c2fb0",
  success: "#1f7a5c",
  "success-soft": "#e6f4ee",
  warning: "#a35a00",
  "warning-soft": "#fcf1e1",
  danger: "#b42318",
  "danger-soft": "#fcebea",
};

// Neutral greys tinted toward Positive Navy. 100 = Cloud Grey, 200 = border,
// 400 = Slate Grey, 600 = ink-muted, 900 = Positive Navy.
const gray = {
  50: "#f8f8fa",
  100: "#f2f2f4",
  200: "#e2e3e8",
  300: "#c9cbd5",
  400: "#8a8fa3",
  500: "#6c718a",
  600: "#5b6078",
  700: "#40455f",
  800: "#2a2e4d",
  900: "#191c3b",
  950: "#12142b",
};

// The single accent hue, built on Positive Magenta. 500 = accent,
// 400 = accent-hover, 700 = accent-text, 50 = accent-soft.
const accentScale = {
  50: "#f8eafb",
  100: "#f2dcf6",
  200: "#e8c1ef",
  300: "#dea0e8",
  400: "#d980e6",
  500: "#c756d9",
  600: "#b040c3",
  700: "#9c2fb0",
  800: "#7d2490",
  900: "#5c1a6b",
  950: "#3a1044",
};

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  		},
  		colors: {
  			pc,
  			gray,
  			slate: gray,
  			zinc: gray,
  			neutral: gray,
  			purple: accentScale,
  			fuchsia: accentScale,
  			violet: accentScale,
  			indigo: accentScale,
  			blue: accentScale,
  			pink: accentScale,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius-lg)',
  			md: 'var(--radius-md)',
  			sm: 'var(--radius-sm)',
  			pill: 'var(--radius-pill)'
  		},
  		boxShadow: {
  			card: 'var(--shadow-card)',
  			overlay: 'var(--shadow-overlay)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
