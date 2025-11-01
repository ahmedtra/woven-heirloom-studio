/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CURRENCY?: "franc" | "tnd" | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
