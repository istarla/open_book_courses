export type Section = {
  id: string;
  title: string;
};

export type LessonFile = {
  type: "file";
  id: string;
  title: string;
  component: React.ComponentType;
  sections: Section[];
};

export type LessonFolder = {
  type: "folder";
  id: string;
  title: string;
  children: Lesson[];
};

export type Lesson = LessonFile | LessonFolder;

export type Course = {
  code: string;
  id: string;
  title: string;
  folderName: string;
  folderPath: string;
  noOfLessons: number;
  imageURL: string;
  description: string;
  instructor: string;
  category: string;
  tags: string[];
  lessons?: Lesson[];
};

export const COURSES: Course[] = [
  {
    code: "C001",
    id: "html",
    title: "HTML Basics",
    folderName: "html",
    folderPath: "/src/courses/html",
    noOfLessons: 8,
    imageURL: "/src/courses/assets/images/html.png",
    description:
      "Learn HTML step by step from introduction to advanced features. Covers tags, elements, forms, inputs, multimedia, and best practices.",
    instructor: "OpenBook Team",
    category: "Web Development",
    tags: ["html", "frontend", "web-basics", "markup"],
  },
  {
    code: "C002",
    id: "css",
    title: "CSS Basics",
    folderName: "css",
    folderPath: "/src/courses/css",
    noOfLessons: 8,
    imageURL: "/src/courses/assets/images/css.png",
    description:
      "Master CSS step by step, from styling basics to advanced features. Covers borders, margins, lists, tables, animations, shadows, and modern design practices.",
    instructor: "OpenBook Team",
    category: "Web Development",
    tags: ["css", "frontend", "styles", "web-design"],
  },
  {
    code: "C003",
    id: "python",
    title: "Python Basics",
    folderName: "python",
    folderPath: "/src/courses/python",
    noOfLessons: 8,
    imageURL: "/src/courses/assets/images/python.jpg",
    description:
      "Learn Python step by step from introduction to advanced features. Covers variables, data types, control flow, functions, modules, and object-oriented programming.",
    instructor: "OpenBook Team",
    category: "Programming",
    tags: ["python", "programming", "beginners", "scripting"],
  },
];
