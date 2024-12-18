import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    eulers_number: 2.718281828459045,
  });
});

export default app;
