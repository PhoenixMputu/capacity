import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  {
    rules: {
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "always"],
      "no-console": "warn",
      
      "unused-imports/no-unused-imports": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ]
    }
  },
  
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    ignores: [
      "node_modules/",
      "dist/",
      ".next/",
      "out/",
      "*.d.ts",
      "*.env",
      "*.env.*",
    ]
  }
];

export default eslintConfig;