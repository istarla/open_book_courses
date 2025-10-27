import type { Course } from "../index";

import Introduction from "./lessons/01-introduction.mdx";
import Borders from "./lessons/02-basic/01-borders.mdx";
import Margins from "./lessons/02-basic/02-margins.mdx";
import Lists from "./lessons/03-intermediate/01-lists.mdx";
import Tables from "./lessons/03-intermediate/02-tables.mdx";
import Animations from "./lessons/04-advanced/01-animations.mdx";
import Shadows from "./lessons/04-advanced/02-shadows.mdx";
import Conclusion from "./lessons/05-conclusion.mdx";

const cssCourse: Course = {
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

  lessons: [
    {
      type: "file",
      id: "01-introduction",
      title: "Introduction to CSS",
      component: Introduction,
      sections: [
        { id: "what-is-css", title: "What is CSS?" },
        { id: "css-history", title: "Brief History of CSS" },
        { id: "css-syntax", title: "Basic Syntax & Rules" },
        { id: "how-to-use", title: "Ways to Add CSS" },
        { id: "summary", title: "Summary" },
      ],
    },

    {
      type: "folder",
      id: "02-basic",
      title: "CSS Basics",
      children: [
        {
          type: "file",
          id: "01-borders",
          title: "Borders",
          component: Borders,
          sections: [
            { id: "border-styles", title: "Border Styles" },
            { id: "border-width", title: "Border Width" },
            { id: "border-color", title: "Border Color" },
          ],
        },
        {
          type: "file",
          id: "02-margins",
          title: "Margins",
          component: Margins,
          sections: [
            { id: "margin-properties", title: "Margin Properties" },
            { id: "margin-shorthand", title: "Shorthand Margin Syntax" },
          ],
        },
      ],
    },

    {
      type: "folder",
      id: "03-intermediate",
      title: "Intermediate CSS",
      children: [
        {
          type: "file",
          id: "01-lists",
          title: "Lists",
          component: Lists,
          sections: [
            { id: "ordered-lists", title: "Ordered Lists" },
            { id: "unordered-lists", title: "Unordered Lists" },
            { id: "list-style", title: "List Styling" },
          ],
        },
        {
          type: "file",
          id: "02-tables",
          title: "Tables",
          component: Tables,
          sections: [
            { id: "table-borders", title: "Table Borders" },
            { id: "table-spacing", title: "Cell Spacing & Padding" },
            { id: "table-styling", title: "Table Styling" },
          ],
        },
      ],
    },

    {
      type: "folder",
      id: "04-advanced",
      title: "Advanced CSS",
      children: [
        {
          type: "file",
          id: "01-animations",
          title: "Animations",
          component: Animations,
          sections: [
            { id: "keyframes", title: "Using @keyframes" },
            { id: "transitions", title: "CSS Transitions" },
            { id: "animation-properties", title: "Animation Properties" },
          ],
        },
        {
          type: "file",
          id: "02-shadows",
          title: "Shadows",
          component: Shadows,
          sections: [
            { id: "text-shadows", title: "Text Shadows" },
            { id: "box-shadows", title: "Box Shadows" },
          ],
        },
      ],
    },

    {
      type: "file",
      id: "05-conclusion",
      title: "Conclusion",
      component: Conclusion,
      sections: [
        { id: "summary", title: "Course Summary" },
        { id: "next-steps", title: "Next Steps" },
        { id: "resources", title: "Additional Resources" },
      ],
    },
  ],
};

export default cssCourse;
