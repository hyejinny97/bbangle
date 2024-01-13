/** @type {import('tailwindcss').Config} */
module.exports = {
    // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                pop: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' }
                }
            },
            animation: {
                pop: 'pop 0.4s ease-in-out'
            },

            colors: {
                color: {
                    PrimaryOrangeRed: '#F04C28',
                    SecondaryOrangeRed: '#ED5F5F',
                    SubColorPink: '#FEEDEA',
                    Gray100: '#F5F5F5',
                    Gray200: '#EEEEEE',
                    Gray400: '#BDBDBD',
                    Gray500: '#9E9E9E',
                    Gray600: '#757575',
                    Gray700: '#616161',
                    Gray800: '#424242',
                    Gray900: '#212121',
                    White: '#fff'
                }
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
};
