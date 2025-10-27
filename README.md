### To Run this project

> #### Execute following commands

```bash
git clone https://github.com/rajesh93986/open-book-template.git

cd open-book-template

npm install

npm run dev
```

## 📚 How to Add a New Course

Follow these steps to add a new course to this project:

> **Note** : In order to highlight the code in codeblocks in your .mdx files, add corresponding prismjs css file at import section of `CourseLayout.tsx` component as follow.
> For example, in order to highlight `javascript` syntax in codeblocks inside .mdx files. I added prismjs javascript css file like below
```typescript 
// path : src/components/CourseLayout.tsx
import "prismjs/components/prism-javascript";
```
### 1. Create a Course Folder

Inside the `src/courses` directory, create a new folder for your course.  
For example, to add a course called "JavaScript", create:

```
src/courses/javascript/
```

### 2. Add Lessons

Inside your course folder, create a `lessons` directory.  
Organize your lessons as `.mdx` files. You can group them in subfolders (e.g., `02-basic`, `03-intermediate`) or keep them flat.

Example structure:

```
src/courses/javascript/
  lessons/
    01-introduction.mdx
    02-basic/
      01-variables.mdx
      02-functions.mdx
    03-advanced/
      01-async.mdx
    04-conclusion.mdx
```

### 3. Structure Your `.mdx` Files for Table of Contents (ToC)

To enable the right-side Table of Contents navigation, **each section in your lesson’s `.mdx` file must be wrapped in a `<section>` element with a unique `id`**.  
These `id` values should match the `sections` array in your course’s `index.ts` metadata.

**Example `02-basic/01-variables.mdx` file:**

```mdx
# 02-basic/01-variables.mdx

<section id="variable-declaration">
## Variable declaration

Content for this section...

</section>

<section id="variable-scope">
## Variable Scope

Content for this section...

</section>
<section id="variable-types">
## Variable types

Content for this section...

</section>
```

**Example metadata in `javascript/index.ts`:**

```typescript
{
  type: "file",
  id: "02-basic-01-variables",
  title: "Javascript Variables",
  component: Variables,
  sections: [
    { id: "variable-declaration", title: "Variable Declaration" },
    { id: "variable-scope", title: "Variable Scope" },
    { id: "variable-types", title: "Variable Types" },
  ],
},
```

> **Important:**
>
> - The `id` in each `<section id="...">` in corresponding .mdx file must exactly match the `id` in the `sections` array for that lesson in your course metadata.
> - The `title` in the `sections` array is what appears in the Table of Contents.

This ensures the Table of Contents highlights and scrolls to the correct section as users navigate your lesson.

### 4. Create a Course Index File

In your course folder, add an `index.ts` file (path: `javascript/index.ts`).  
This file should export your course’s metadata and lesson structure.

Example `index.ts`:

```typescript
// filepath: src/courses/javascript/index.ts
import type { Course } from "@/courses";
import Introduction from "./lessons/01-introduction.mdx";
import Variables from "./lessons/02-basic/01-variables.mdx";
import Functions from "./lessons/02-basic/02-functions.mdx";
import Async from "./lessons/03-advanced/01-async.mdx";
import Conclusion from "./lessons/05-conclusion.mdx";

const course: Course = {
  id: "javascript",
  title: "JavaScript Fundamentals",
  lessons: [
    {
      type: "file",
      id: "01-introduction",
      title: "Introduction",
      component: Introduction,
      sections: [], // Optional: add section info for table of contents
    },
    {
      type: "folder",
      id: "02-basic",
      title: "Basic Concepts",
      children: [
        {
          type: "file",
          id: "02-basic-01-variables",
          title: "Javascript Variables",
          component: Variables,
          sections: [
            { id: "variable-declaration", title: "Variable Declaration" },
            { id: "variable-scope", title: "Variable Scope" },
            { id: "variable-types", title: "Variable Types" },
          ],
        },
        {
          type: "file",
          id: "02-basic-02-functions",
          title: "Functions",
          component: Functions,
          sections: [],
        },
      ],
    },
    {
      type: "folder",
      id: "03-advanced",
      title: "Advanced Topics",
      children: [
        {
          type: "file",
          id: "03-advanced-01-async",
          title: "Async Programming",
          component: Async,
          sections: [],
        },
      ],
    },
    {
      type: "file",
      id: "05-conclusion",
      title: "Conclusion",
      component: Conclusion,
      sections: [],
    },
  ],
};

export default course;
```

> **Tip:**
>
> - The `id` for each lesson/folder should be unique.
> - The `component` field should import the corresponding `.mdx` file.
> - You can add a `sections` array for each lesson to enable the table of contents in the right sidebar.

### 5. Register Your Course in `courses/index.ts`

Open `src/courses/index.ts` and add a new entry to the `COURSES` array for your course.  
This step is required so your course appears in the app.

Example:

```typescript
// filepath: src/courses/index.ts
export const COURSES: Course[] = [
  // ...existing courses...
  {
    code: "C003",
    id: "javascript",
    title: "JavaScript Fundamentals",
    folderName: "javascript",
    folderPath: "/src/courses/javascript",
    noOfLessons: 8,   // here ,  no of lessons is equal to no of mdx files inside lessons folder
    imageURL: "/src/courses/assets/images/javascript.png",
    description: "Learn JavaScript from basics to advanced topics.",
    instructor: "Your Name",
    category: "Web Development",
    tags: ["javascript", "frontend", "web", "programming"],
  },
];
```

- Make sure `folderName` matches your course folder.
- Update `imageURL` if you add a course image in `assets/images/`.

### 6. Add Assets or Components (Optional)

If your course needs images or custom components, add them in `assets/` or `components/` inside your course folder.

### 7. Test Your Course

- Start the development server.
- Open the course you created and check the following are working properly or not
  - Check left side lesson navigation bar is rendering all lessons correctly or not
  - Check  right side sections are properly rendering , working and highlighting or not
  - Check every feature is working properly or not

---

**That’s it!**  
Your new course will automatically be picked up by the app’s layout and navigation.

If you have any questions, check the existing courses (`src/courses/css` or `src/courses/html`) for examples.


> If you have any queries , ask.