/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'barber': {
          50: '#FFF7ED',
          100: '#FFE4CA',
          200: '#FED0A7',
          300: '#FDB374',
          400: '#FB9541',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        }
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvwNPyhdCDbVayJGads/WiUWcjCvCnruTBNHS9gmX2VzVbk7ZvB1gb1hkWFGl+A/n+/FowcO34U/XvKqZ/fHY+6vgRfU92XrOBUbGeeDfQmjWjdrK+frc6FdGReQhfSF5JvR29O2QrfNw1huTwlgsyXLo0u+5So82sgv7tsFZR2nxB6lXiquHrfD8nfYZ9SeT0LiuvSoVrxGY16pCNRZKqvwWsn5OHypPBELzohMCaRaa0ceTHYqe7X/gfJEEtKFbJpWoNqO+aS1cuTykGPpK5Ga48m6L3NefTr013KqYBQu929iP1oQ/7UwSR+i3zqruUmT84qmhzLpxyj7pr9kg7LKvqaXxZmdpn+6o8bvnmlocVYHhvvWPXwN8KJb/BvjFafgP0SETJb4Aa39bmZ5w6tKgLOrvrPqMnvQJ2j+2o4qvMg4BnfV/eUWYRK8D2HWZnn/o/UwHxWQV8RmxPSdYgbOwDdvzMYmYXiL6Tsg1YwO4DSPpUcVyCRcA+7H4cMLMSiMT+dPkGDPB5HzIDZjHAfQh0M7uEgM8HnJ5lXiOLgAw4q+6o/NQHm0xdH9KPuqLGNVOj8LYm+B6Yg1sNvenfmTCzrhF+0fgzO8jRUJ+DBHOvjFnCjPB5xO0mm1lcxs0CO8iUMgM45Aa+Ky7rQDlj1+GQOBpyB/jRHV5Qh9/B8D5TDAQ9mKQ6Yvi0+BwZPi2+XbQVlTDj+BRH4/h0kDATODZJ/gkhMZ8h8p8RJI7NnyL+JQOOzQQaL5uv0n+PYfPF7H0TBtkB+/rOlK+bZYOzq7ikP+VlvYzu/0/o/+P/LPwDHxSwEFtNdz8AAAAASUVORK5CYII=')",
      }
    },
  },
  plugins: [],
};