
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
			fontFamily: {
				'handwritten': ['Caveat', 'cursive'],
			},
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
				// Adding missing colors that are used in the classes
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
				navy: '#1E3A8A', // Same as primary-blue for consistency
				sunshine: '#FBBF24', // Using accent-yellow for sunshine
				coral: '#F97316', // Using highlight-orange for coral
				azure: '#1E3A8A', // Using primary-blue as azure
				teal: '#34D399', // Using secondary-green as teal
				liverpool: '#F97316', // Using highlight-orange for liverpool
				mathworks: '#0076A8', // A blue color for MathWorks references
				aqua: '#38B2AC', // Adding aqua color
				emerald: {
					500: '#10B981',
					600: '#059669'
				},
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0', // Defining a darker slate for navbar
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b'
				},
				// Updated color scheme based on the provided brand colors
				'primary-blue': '#1E3A8A', // Deep Blue - Primary Color
				'secondary-green': '#34D399', // Vibrant Green - Secondary Color
				'accent-yellow': '#FBBF24', // Bright Yellow - Accent Color
				'neutral-gray': '#D1D5DB', // Soft Gray - Supporting Color
				'highlight-orange': '#F97316', // Warm Orange - Highlight Color
				// Fun annotation colors
				'marker-yellow': '#FFD600',
				'marker-coral': '#FF6B6B',
				'marker-blue': '#4DABF7',
				'marker-green': '#51CF66',
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
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
				'slide-in-right': 'slideInFromRight 0.5s ease-out forwards',
				'bounce': 'bounce 2s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
