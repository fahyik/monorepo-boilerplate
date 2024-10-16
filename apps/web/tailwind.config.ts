import type { Config } from "tailwindcss";

import sharedConfig from "@packagename/ui/tailwind.config.ts";

const config: Pick<
  Config,
  "darkMode" | "content" | "presets" | "important" | "safelist"
> = {
  darkMode: "class",
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
    "../../packages/ui/**/*.tsx",
  ],
  presets: [sharedConfig],
  safelist: ["w-32", "w-44", "w-52"],
};

export default config;
