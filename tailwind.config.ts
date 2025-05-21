import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0C5C4C",
                secondary: "#88C7A1",
                accent: "#C5E7DA",
                background: "#F2F5F3",
                text: "#124E44",
            },
        },
    },
    plugins: [],
};

export default config;
