import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

const ASSETS_DIR = 'res';
const OUT_DIR = 'dist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11', '> 1%'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  server: {
    port: 8888,
  },

  // 编译配置
  build: {
    outDir: OUT_DIR,
    assetsDir: ASSETS_DIR,
    rollupOptions: {
      output: {
        chunkFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,
        entryFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,

        assetFileNames: ({ name }) => {
          const namePattern = '[name]-[hash][extname]';
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return `${ASSETS_DIR}/images/${namePattern}`;
          }

          if (/\.css$/.test(name ?? '')) {
            return `${ASSETS_DIR}/css/${namePattern}`;
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return `${ASSETS_DIR}/${namePattern}`;
        },
      },
    },
  },
});
