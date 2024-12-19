import { Hono } from "hono";

const app = new Hono();

interface Student {
  id: string;
  name: string;
}

interface Subject {
  id: string;
  name: string;
  teacher: Teacher;
  students: Student[];
}

interface Teacher {
  id: string;
  name: string;
}

const mockData: Subject[] = [
  {
    id: "1",
    name: "Math",
    teacher: {
      id: "1",
      name: "John Doe",
    },
    students: [
      {
        id: "1",
        name: "Alice",
      },
      {
        id: "2",
        name: "Bob",
      },
    ],
  },
  {
    id: "2",
    name: "Science",
    teacher: {
      id: "2",
      name: "Jane Doe",
    },
    students: [
      {
        id: "1",
        name: "Alice",
      },
      {
        id: "3",
        name: "Charlie",
      },
    ],
  },
];

app.get("/", (c) => {
  return c.json(mockData);
});

export default app;
