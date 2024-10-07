import { logger } from "@packagename/logger";
import * as fs from "fs";

import { createServer } from "./app";
import { handleProcessTerminationEvents } from "./server/process-lifecycle";

const socketPath = "./tmp/api.sock";
const port =
  process.env.NODE_ENV === "production"
    ? socketPath
    : process.env.PORT || "3001";

handleProcessTerminationEvents();

// Remove the socket file if it already exists
if (process.env.NODE_ENV === "production" && fs.existsSync(socketPath)) {
  fs.unlinkSync(socketPath);
}

createServer()
  .then((server) => {
    server.listen(port, () => {
      logger.debug(`🟢🟢🟢 Server listening on port ${port}`);
    });

    // enable nginx to read socket
    if (fs.existsSync(socketPath)) {
      fs.chmodSync(socketPath, 0o777);
    }
  })
  .catch((err: unknown) => {
    logger.error("🔴🔴🔴 Server error", err);
  });
