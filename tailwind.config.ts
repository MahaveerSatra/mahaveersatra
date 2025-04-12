import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Our defined color scheme - Just 3 main colors and their variations
				// Deep Blue (Primary)
				'deep-blue': {
					DEFAULT: '#1E3A8A',
					light: '#2B4BAA',
					dark: '#14295F',
				},
				// Teal (Secondary)
				'teal': {
					DEFAULT: '#0D9488',
					light: '#14B8AB',
					dark: '#0A766D',
				},
				// Amber (Accent/Tertiary)
				'amber': {
					DEFAULT: '#FBBF24',
					light: '#FCD34D',
					dark: '#F59E0B',
				},
				// Keep some neutral colors
				'neutral': {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
				// Remove all other custom colors and keep only the ones we need
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b'
				},
				indigo: {
				          50: '#eef2ff',
				          100: '#e0e7ff',
				          200: '#c7d2fe',
				          300: '#a5b4fc',
				          400: '#818cf8',
				          500: '#6366f1',
				          600: '#4f46e5',
				          700: '#4338ca',
				          800: '#3730a3',
				          900: '#312e81',
				},
				blue: {
				          50: '#eff6ff',
				          100: '#dbeafe',
				          200: '#bfdbfe',
				          300: '#93c5fd',
				          400: '#60a5fa',
				          500: '#3b82f6',
				          600: '#2563eb',
				          700: '#1d4ed8',
				          800: '#1e40af',
				},
				navy: '#1E3A8A', // Same as deep-blue for consistency
				sunshine: '#FBBF24', // Using amber for sunshine
				coral: '#F97316', // A warm orange color
				azure: '#1E3A8A', // Using deep-blue as azure
				liverpool: '#F97316', // Using coral for liverpool
				mathworks: '#0076A8', // A blue color for MathWorks references
				aqua: '#38B2AC', // Adding aqua color
				emerald: {
					500: '#10B981',
					600: '#059669'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideInFromLeft: {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideInFromRight: {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
				'slide-in-right': 'slideInFromRight 0.5s ease-out forwards',
				'bounce': 'bounce 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
