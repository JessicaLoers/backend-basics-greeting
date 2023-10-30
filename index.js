import { server } from "./server.js";

const port = 8000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
