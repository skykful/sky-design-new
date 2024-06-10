/// <reference types="vite/client" />

declare module 'vue-router'

interface ImportMetaEnv {
  readonly VITE_PRO_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
