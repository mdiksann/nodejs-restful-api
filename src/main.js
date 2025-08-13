import {web} from "./application/web.js";
import {logger} from "./application/logging.js";

web.listen(3000, () => {
    logger.info('Server is running on port 3000');
});