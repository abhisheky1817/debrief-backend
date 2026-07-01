import app from "./src/index.js";
import { PORT } from "./src/config/serverConfig.js";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});