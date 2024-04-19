/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly __APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
