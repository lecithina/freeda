import type {Config} from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                freeda: {
                    pink: '#e91e8c',
                    'pink-dark': '#c4177a',
                    'pink-light': '#f04da3',
                    black: '#000000',
                    white: '#ffffff',
                    gray: '#1a1a1a',
                    'gray-light': '#2a2a2a'
                }
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'Noto Sans Devanagari',
                    'sans-serif'
                ]
            }
        }
    },
    plugins: []
} satisfies Config;
