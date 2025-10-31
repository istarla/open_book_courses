import type { Course } from "../index";

import Introduction from "./lessons/01-introduction/01-01-what_is_css_syntax_and_selectors.mdx";
import applyingcss from "./lessons/01-introduction/01-02-applying_css.mdx";



const cssCourse: Course = {
  code: "C002",
  id: "css",
  title: "CSS Basics",
  folderName: "css",
  folderPath: "/src/courses/css",
  noOfLessons: 8,
  imageURL: "/src/courses/assets/src/courses/python/images/css.png",
  description:
    "Master CSS step by step, from styling basics to advanced features. Covers borders, margins, lists, tables, animations, shadows, and modern design practices.",
  instructor: "OpenBook Team",
  category: "Web Development",
  tags: ["css", "frontend", "styles", "web-design"],

  lessons: [
    {
       
      type: "folder",
      id: "01-introduction",
      title: "Introduction to css",
      children: [
        {
      type: "file",
      id: "01-introduction",
      title: "Introduction to CSS",
      component: Introduction,
      sections: [
        { id: "what-is-css", title: "what-is-css" },
        { id: "css-syntax", title: "css-syntax" },
        { id: "basic-css-selectors", title: "basic-css-selectors" },
        { id: "element-selector", title: "element-selector" },
        { id: "class-selector", title: "class-selector" },
        { id: "id-selector", title: "id-selector" },
        { id: "universal-selector", title: "universal-selector" },
        { id: "grouping-selector", title: "grouping-selector" },
        { id: "quiz-time", title: "quiz-time" },
        ],
     },
     {
      type:"file",
      id:"02-applying-css",
      title:"applying-css",
      component:applyingcss,
      sections:[
        {id:"Applying-CSS",title:"Applying-CSS"},
        {id:"inline-styles",title:"inline-styles"},
        {id:"pros-and-cons-of-inline-styles",title:"pros-and-cons-of-inline-styles"},
        {id:"internal-stylesheets",title:"internal-stylesheets"},
        {id:"pros-and-cons-of-internal-stylesheets",title:"pros-and-cons-of-internal-stylesheets"},
        {id:"external-stylesheets",title:"external-stylesheets"},
        {id:"pros-and-cons-of-external-stylesheets",title:"pros-and-cons-of-external-stylesheets"},
        {id:"order-of-precedence-the-cascade",title:"order-of-precedence-the-cascade"},
        {id:"quiz-time",title:"quiz-time"},
    ],
   },
   ],

    },
    ],
};

   

export default cssCourse;
