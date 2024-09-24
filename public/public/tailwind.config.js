module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust the paths as necessary
    theme: {
      extend: {
        keyframes: {
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out',
        },
      },
    },
    plugins: [],
  };
  