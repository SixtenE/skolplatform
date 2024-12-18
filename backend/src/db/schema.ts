import { index, int, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: int(),
  },
  (t) => [index("custom_name").on(t.id)]
);
