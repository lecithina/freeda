import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    clearScreen: false,
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
                maximumFileSizeToCacheInBytes: 16777216
            }
        })
    ],
    server: {
        open: true
    },
    build: {
        sourcemap: true
    }
});
