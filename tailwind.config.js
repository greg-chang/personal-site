/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            marginTop: '2.5rem',
                            marginBottom: '1.5rem',
                            color: '#000000'
                        },
                        h2: {
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                            color: '#1a1a1a'
                        },
                        h3: {
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginTop: '1.5rem',
                            marginBottom: '0.75rem',
                            color: '#262626'
                        },
                        ul: {
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem'
                        },
                        li: {
                            marginTop: '0.25rem',
                            marginBottom: '0.25rem'
                        }
                    }
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} 