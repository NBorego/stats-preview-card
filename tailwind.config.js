/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    'dark-blue': 'hsl(233, 47%, 7%)',
                    'Dark-desaturated-blue': 'hsl(244, 38%, 16%)',
                    'Soft-violet': 'hsl(277, 64%, 61%)',
                },
                neutral: {
                    'Slightly-1': 'hsla(0, 0%, 100%, 0.75)',
                    'Slightly-2': 'hsla(0, 0%, 100%, 0.6)',
                },
            },
            fontFamily: {
                'Inter-font': ['Inter', 'sans-serif'],
                'Lexend-font': ['Lexend Deca', 'sans-serif'],
            },
        },
        screens: {
            'xs': '400px',
            'md': '1100px',
        },
    },
    plugins: [],
};
