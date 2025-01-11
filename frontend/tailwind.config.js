import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          focus: "hsl(var(--primary-focus))",
          foreground: "hsl(var(--primary-foreground))",
        },
        wpp: {
          DEFAULT: "hsl(var(--wpp))",
          focus: "hsl(var(--wpp-focus))",
          foreground: "hsl(var(--wpp-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          medium: "hsl(var(--muted-medium))",
          low: "hsl(var(--muted-low))",
        },
      },
    },
  },
  plugins: [],
}