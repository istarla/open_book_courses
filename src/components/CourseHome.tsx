import { CourseCard } from "@/components/CourseCard";
import { COURSES } from "@/courses/index";

export default function CourseHome() {
  const courses = COURSES;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            noOfLessons={course.noOfLessons}
            folderName={course.folderName}
            imageURL={course.imageURL}
            onEdit={(e) => {
              e.preventDefault();
              alert(`Edit ${course.title}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
