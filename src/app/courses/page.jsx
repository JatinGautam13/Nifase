import courses from "@/data/courses.json";
import CoursesSec1 from "@/components/courcses/CoursesSec1";
import CoursesSec2 from "@/components/courcses/CoursesSec2";

export const metadata = {
  title: "Courses",
  description: "Explore all NIFASE job-oriented courses and certifications.",
};

export default function CoursesPage() {
  return (
    <>
      <CoursesSec1 />
      <CoursesSec2 courses={courses} />
    </>
  );
}
