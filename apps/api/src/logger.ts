import { createLogger } from "@packagename/logger";

export const logger = createLogger({
  defaultMeta: { service: process.env.PACKAGE_NAME ?? "local" },
});
