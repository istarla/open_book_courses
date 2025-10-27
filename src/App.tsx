import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/CourseHome";
import CourseLayout from "./components/CourseLayout";
import BookSpinner from "./components/BookSpinner";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <CourseHome /> },
    { path: "/spinner", element: <BookSpinner /> },
    { path: "/:cid", element: <CourseLayout /> },
    { path: "/:cid/:lesson", element: <CourseLayout /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
