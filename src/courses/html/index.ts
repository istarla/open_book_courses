import type { Course } from "../index";

import Introduction from "./lessons/01-introduction.mdx";
import Tags from "./lessons/02-basic/01-tags.mdx";
import Elements from "./lessons/02-basic/02-elements.mdx";
import Forms from "./lessons/03-intermediate/01-forms.mdx";
import Inputs from "./lessons/03-intermediate/02-inputs.mdx";
import Canva from "./lessons/04-advanced/01-canva.mdx";
import Media from "./lessons/04-advanced/02-media.mdx";
import Conclusion from "./lessons/05-conclusion.mdx";

const htmlCourse: Course = {
  code: "C001",
  id: "html",
  title: "HTML Basics",
  folderName: "html",
  folderPath: "/src/courses/html",
  noOfLessons: 8,
  imageURL: "/src/courses/assets/src/courses/python/images/html.png",
  description:
    "Learn HTML step by step from introduction to advanced features. Covers tags, elements, forms, inputs, multimedia, and best practices.",
  instructor: "OpenBook Team",
  category: "Web Development",
  tags: ["html", "frontend", "web-basics", "markup"],

  lessons: [
    {
      type: "file",
      id: "01-introduction",
      title: "Introduction to HTML",
      component: Introduction,
      sections: [
        { id: "what-is-html", title: "What is HTML?" },
        { id: "html-history", title: "A Brief History of HTML" },
        { id: "basic-structure", title: "Basic Structure of an HTML Document" },
        { id: "tools-needed", title: "Tools You Need" },
        { id: "summary", title: "Summary" },
      ],
    },

    {
      type: "folder",
      id: "02-basic",
      title: "HTML Basics",
      children: [
        {
          type: "file",
          id: "01-tags",
          title: "Tags",
          component: Tags,
          sections: [
            { id: "opening-closing", title: "Opening & Closing Tags" },
            { id: "self-closing", title: "Self-Closing Tags" },
          ],
        },
        {
          type: "file",
          id: "02-elements",
          title: "Elements",
          component: Elements,
          sections: [
            { id: "nested-elements", title: "Nested Elements" },
            { id: "block-vs-inline", title: "Block vs Inline Elements" },
          ],
        },
      ],
    },

    {
      type: "folder",
      id: "03-intermediate",
      title: "Intermediate HTML",
      children: [
        {
          type: "file",
          id: "01-forms",
          title: "Forms",
          component: Forms,
          sections: [
            { id: "form-tag", title: "<form> Tag" },
            { id: "labels", title: "Labels and Accessibility" },
          ],
        },
        {
          type: "file",
          id: "02-inputs",
          title: "Inputs",
          component: Inputs,
          sections: [
            { id: "text-input", title: "Text Input" },
            { id: "checkbox-radio", title: "Checkboxes & Radio Buttons" },
            { id: "date-range", title: "Date & Range Inputs" },
          ],
        },
      ],
    },

    {
      type: "folder",
      id: "04-advanced",
      title: "Advanced HTML",
      children: [
        {
          type: "file",
          id: "01-canva",
          title: "Canvas",
          component: Canva,
          sections: [
            { id: "canvas-basics", title: "Canvas Basics" },
            { id: "drawing-api", title: "Drawing with API" },
          ],
        },
        {
          type: "file",
          id: "02-media",
          title: "Media",
          component: Media,
          sections: [
            { id: "audio", title: "Adding Audio" },
            { id: "video", title: "Embedding Video" },
            { id: "controls", title: "Media Controls" },
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

export default htmlCourse;
