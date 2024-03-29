/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4D72B8',
                secondary: '#748ACC',
                input: '#F5F8FA', //ebf0f6
                icon: '#050505',
            },
            spacing: {
                120: '30rem',
                140: '35rem',
                192: '45rem',
            },
            minWidth: {
                notification: '30px',
            },
            maxWidth: {
                name: '96px',
            },
            keyframes: {
                circle_scale: {
                    '0%': { transform: 'scale(1.0)' },
                    '100%': { transform: 'scale(1.25)' },
                },
            },
            animation: {
                circle_scale: 'circle_scale 3s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
};
