import baseConfig, { restrictEnvAccess } from "@local/eslint-config/base";
import nextjsConfig from "@local/eslint-config/nextjs";
import reactConfig from "@local/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
