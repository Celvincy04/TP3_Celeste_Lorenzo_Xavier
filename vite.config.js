import { defineConfig } from 'vite';

export default defineConfig({
    base: '/TP3_Celeste_Lorenzo_Xavier',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
            },
        },
    },
})