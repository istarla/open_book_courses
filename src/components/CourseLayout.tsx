import type { Course, Lesson, LessonFile } from "@/courses";
import { useEffect, useState, useRef, type JSX } from "react";
import { useLocation, useParams, useNavigate, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  FileText,
  Folder,
  Menu,
  BadgeCheck,
  ArrowRight,
  ArrowLeft,
  CirclePlay,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import BookSpinner from "./BookSpinner";


interface LocationState {
  folderName: string;
}

function CourseLayout() {
  const location = useLocation();
  const { cid, lesson } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  const [currentLesson, setCurrentLesson] = useState<LessonFile | null>(null);
  // Additional state for sidebar functionality
  const [search, setSearch] = useState("");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // New state from CourseLayout
  const [activeFragment, setActiveFragment] = useState("");
  const mainRef = useRef<HTMLDivElement | null>(null);
  const folderName =
    (location.state as LocationState)?.folderName ||
    new URLSearchParams(location.search).get("course") ||
    cid;

  useEffect(() => {
    Prism.highlightAll();
  }, [currentLesson]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [lesson]);

  // Load completed lessons from storage on component mount
  useEffect(() => {
    if (folderName) {
      const storageKey = `completed-lessons-${folderName}`;
      try {
        // Try sessionStorage first, fallback to memory
        const stored = sessionStorage.getItem(storageKey);
        if (stored) {
          setCompletedLessons(JSON.parse(stored));
        }
      } catch (error) {
        console.warn("SessionStorage not available, using memory storage");
      }
    }
  }, [folderName]);

  // Save completed lessons to storage whenever it changes
  useEffect(() => {
    if (folderName && completedLessons.length > 0) {
      const storageKey = `completed-lessons-${folderName}`;
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(completedLessons));
      } catch (error) {
        console.warn(
          "SessionStorage not available, completion progress may not persist"
        );
      }
    }
  }, [completedLessons, folderName]);

  // Helper function to get the first lesson from the course structure
  const getFirstLesson = (lessons: Lesson[]): LessonFile | null => {
    for (const lessonItem of lessons) {
      if (lessonItem.type === "file") {
        return lessonItem;
      } else if (lessonItem.type === "folder" && lessonItem.children) {
        const firstInFolder = getFirstLesson(lessonItem.children);
        if (firstInFolder) return firstInFolder;
      }
    }
    return null;
  };

  // Load course data dynamically based on folderName
  useEffect(() => {
    const loadCourse = async (): Promise<void> => {
      if (!folderName) {
        console.error("❌ No folderName provided");
        return;
      }

      try {
        const module = await import(`@/courses/${folderName}/index.ts`);
        const courseData: Course = module.default;
        console.log("✅ Course loaded successfully:", courseData);
          setCourseData(courseData);

        // If no lesson is specified, navigate to the first lesson
        if (!lesson && courseData.lessons) {
          const firstLesson = getFirstLesson(courseData.lessons as Lesson[]);
          if (firstLesson) {
            navigate(`/${cid}/${firstLesson.id}`, { replace: true });
            return; // Return early to prevent duplicate processing
          }
        }

        // Auto-expand folders that contain the current lesson
        if (lesson) {
          const newExpanded = new Set<string>();
          findAndExpandParentFolders(
            courseData.lessons ?? [],
            lesson,
            newExpanded
          );
          setExpandedFolders(newExpanded);

          // Set current lesson
          const foundLesson = findLessonById(courseData.lessons ?? [], lesson);
          setCurrentLesson(foundLesson);
        }
      } catch (err) {
        console.error("❌ Failed to load course:", folderName, err);
        console.error(
          "📁 Make sure the file exists at:",
          `@/courses/${folderName}/index.ts`
        );
      }
    };

    loadCourse();
  }, [folderName, lesson, navigate, cid]);

  // Intersection Observer for sections
  useEffect(() => {
    if (!currentLesson || !currentLesson.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFragment(entry.target.id);
          }
        });
      },
      {
        root: mainRef.current,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    currentLesson.sections.forEach((s: any) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentLesson]);

  const isAllLessonsCompleted = (lessons: Lesson[]): boolean => {
    for (const lessonItem of lessons) {
      if (lessonItem.type === "file") {
        if (!completedLessons.includes(lessonItem.id)) {
          return false;
        }
      } else if (lessonItem.type === "folder" && lessonItem.children) {
        if (!isAllLessonsCompleted(lessonItem.children)) {
          return false;
        }
      }
    }
    return true;
  };

  const findLessonById = (
    lessons: Lesson[],
    targetId: string
  ): LessonFile | null => {
    for (const lessonItem of lessons) {
      if (lessonItem.type === "file" && lessonItem.id === targetId) {
        return lessonItem;
      } else if (lessonItem.type === "folder" && lessonItem.children) {
        const found = findLessonById(lessonItem.children, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  // Find and expand parent folders for a given lesson
  const findAndExpandParentFolders = (
    lessons: Lesson[],
    targetId: string,
    expanded: Set<string>,
    currentPath: string[] = []
  ): boolean => {
    for (const lessonItem of lessons) {
      if (lessonItem.type === "file" && lessonItem.id === targetId) {
        // Found the target, expand all parent folders
        currentPath.forEach((folderId) => expanded.add(folderId));
        return true;
      } else if (lessonItem.type === "folder" && lessonItem.children) {
        const found = findAndExpandParentFolders(
          lessonItem.children,
          targetId,
          expanded,
          [...currentPath, lessonItem.id]
        );
        if (found) {
          expanded.add(lessonItem.id);
          return true;
        }
      }
    }
    return false;
  };

  const getAllLessons = (lessons: Lesson[]): LessonFile[] => {
    const allLessons: LessonFile[] = [];
    const traverse = (items: Lesson[]): void => {
      items.forEach((item) => {
        if (item.type === "file") {
          allLessons.push(item);
        } else if (item.type === "folder" && item.children) {
          traverse(item.children);
        }
      });
    };
    traverse(lessons);
    return allLessons;
  };

  const toggleFolder = (folderId: string): void => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  // Toggle lesson completion
  const toggleCompletion = (id: string) => {
    setCompletedLessons((prev) => {
      const isCompleted = prev.includes(id);
      const newCompleted = isCompleted
        ? prev.filter((x) => x !== id)
        : [...prev, id];

      // Immediately save to storage
      if (folderName) {
        const storageKey = `completed-lessons-${folderName}`;
        try {
          sessionStorage.setItem(storageKey, JSON.stringify(newCompleted));
        } catch (error) {
          console.warn("Could not save completion progress");
        }
      }

      return newCompleted;
    });
  };

  // Filter lessons for search (flatten structure for search)
  const getFilteredLessons = (): LessonFile[] => {
    if (!courseData) return [];
    const allLessons = getAllLessons(courseData.lessons as Lesson[]);
    return allLessons.filter((lessonItem) =>
      lessonItem.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Navigation functions
  const navigateToLesson = (lessonId: string) => {
    navigate(`/${cid}/${lessonId}`);
  };

  const getCurrentLessonIndex = (): number => {
    if (!courseData) return -1;
    const allLessons = getAllLessons(courseData.lessons as Lesson[]);
    return allLessons.findIndex((l) => l.id === lesson);
  };

  const renderLessonTree = (
    lessons: Lesson[],
    depth: number = 0
  ): JSX.Element[] => {
    return lessons
      .map((lessonItem) => {
        if (lessonItem.type === "file") {
          const isActive = currentLesson?.id === lessonItem.id;
          const isCompleted = completedLessons.includes(lessonItem.id);

          return (
            <Button
              key={lessonItem.id}
              variant="ghost"
              className={cn(
                "w-full justify-start rounded-lg px-3 py-2 text-sm font-medium transition-colors mb-1",
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "hover:bg-muted hover:text-foreground"
              )}
              style={{ paddingLeft: `${depth * 20 + 12}px` }} // Consistent 20px per level
              onClick={() => navigateToLesson(lessonItem.id)}
            >
              <div className="flex items-center gap-2 w-full">
                {isCompleted ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                ) : (
                  <FileText className="h-4 w-4 text-blue-500 flex-shrink-0" />
                )}
                <span className="truncate flex-1 text-left">
                  {lessonItem.title}
                </span>
              </div>
            </Button>
          );
        }

        if (lessonItem.type === "folder") {
          const isExpanded = expandedFolders.has(lessonItem.id);
          const allCompleted = lessonItem.children
            ? isAllLessonsCompleted(lessonItem.children)
            : false;

          return (
            <div key={lessonItem.id} className="mb-1">
              <Button
                variant="ghost"
                className="w-full justify-start rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                style={{ paddingLeft: `${depth * 20 + 12}px` }} // Consistent 20px per level
                onClick={() => toggleFolder(lessonItem.id)}
              >
                <div className="flex items-center gap-2 w-full">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  )}
                  <Folder
                    className={cn(
                      "h-4 w-4 flex-shrink-0",
                      allCompleted ? "text-green-500" : "text-amber-500"
                    )}
                  />
                  <span className="font-medium text-gray-800 flex-1 text-left">
                    {lessonItem.title}
                  </span>
                </div>
              </Button>

              {/* Render children if folder is expanded */}
              {isExpanded && lessonItem.children && (
                <div className="mt-1">
                  {renderLessonTree(lessonItem.children, depth + 1)}
                </div>
              )}
            </div>
          );
        }

        return null;
      })
      .filter(Boolean) as JSX.Element[];
  };

  // Loading state
  if (!courseData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BookSpinner />
      </div>
    );
  }

  const allLessons = getAllLessons(courseData.lessons as Lesson[]);
  const currentIndex = getCurrentLessonIndex();

  // Sidebar Content Component
  const SidebarContent = (
    <ScrollArea className="h-full p-4 space-y-2">
      {/* Course Header Card */}
      <Card className="shadow-sm">
        <CardHeader>
          <NavLink to="/">
            {" "}
            <Button variant={"link"} className="text-indigo-600 cursor-pointer">
              <ArrowLeft /> Back to home
            </Button>
          </NavLink>
          <CardTitle className="text-lg font-semibold">
            {courseData.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Course Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${
                  (completedLessons.length / allLessons.length) * 100
                }%`,
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {completedLessons.length} / {allLessons.length} lessons completed
          </p>
        </CardContent>
      </Card>

      {/* Lessons List Section */}
      <div className="space-y-1 mt-2">
        <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
          Course Content
        </h3>

        {/* Search Input */}
        <div tabIndex={0} className="sr-only" />
        <div className="m-1">
          <Input
            placeholder="Search lessons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg"
          />
        </div>

        {/* Conditional Rendering: Tree or Search Results */}
        {search.trim() ? (
          // SEARCH RESULTS VIEW (Flat List)
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground px-3 py-1">
              Search Results ({getFilteredLessons().length})
            </p>
            {getFilteredLessons().map((lessonItem) => {
              const isActive = currentLesson?.id === lessonItem.id;
              const isCompleted = completedLessons.includes(lessonItem.id);

              return (
                <Button
                  key={lessonItem.id}
                  variant="ghost"
                  className={cn(
                    "w-full  justify-start rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200 "
                      : "hover:bg-muted hover:text-foreground "
                  )}
                  onClick={() => navigateToLesson(lessonItem.id)}
                >
                  <div className="flex items-center gap-2 w-full">
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <FileText className="h-4 w-4 text-blue-500" />
                    )}
                    <span className="truncate flex-1 text-left">
                      {lessonItem.title}
                    </span>
                  </div>
                </Button>
              );
            })}
          </div>
        ) : (
          // TREE STRUCTURE VIEW (Hierarchical)
          <div className="space-y-1">
            {renderLessonTree(courseData.lessons as Lesson[])}
          </div>
        )}
      </div>
    </ScrollArea>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 border-r bg-muted/30">
        {SidebarContent}
      </aside>

      {/* Main Content - FIXED: Added proper overflow and height constraints */}
      <main ref={mainRef} className="flex-1 overflow-y-auto relative">
        <div className="p-6 space-y-12">
          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <VisuallyHidden>
                  <DialogTitle>Course Sidebar</DialogTitle>
                </VisuallyHidden>
                {SidebarContent}
              </SheetContent>
            </Sheet>
          </div>

          {/* Current Lesson Header */}
          {currentLesson && (
            <Card className="mb-6 shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row items-start gap-y-4 sm:items-center justify-between">
                <CardTitle>
                  <CirclePlay className="inline text-blue-500" />{" "}
                  {currentLesson.title}
                </CardTitle>
                <div>
                  <Button
                    onClick={() => toggleCompletion(currentLesson.id)}
                    className={
                      completedLessons.includes(currentLesson.id)
                        ? "bg-green-700 hover:bg-green-700"
                        : "bg-blue-500 hover:bg-blue-500"
                    }
                  >
                    {completedLessons.includes(currentLesson.id)
                      ? "Completed"
                      : "Mark as Completed"}
                    {completedLessons.includes(currentLesson.id) && (
                      <BadgeCheck size={16} />
                    )}
                  </Button>
                </div>
              </CardHeader>
            </Card>
          )}

          {/* Lesson Content */}
          {currentLesson && (
            <div className=" max-w-none overflow-auto markdown">
              {/* Render lesson content here */}
              {currentLesson.component && <currentLesson.component />}
            </div>
          )}

          <Separator className="my-6" />

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Previous Lesson Button */}
            {currentIndex > 0 ? (
              <button
                onClick={() => {
                  if (currentIndex > 0)
                    navigate(`/${cid}/${allLessons[currentIndex - 1].id}`);
                }}
                className="group cursor-pointer relative overflow-hidden rounded-lg border border-indigo-200 bg-white p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
                      <ArrowLeft className="h-4 w-4 text-indigo-600 group-hover:text-indigo-700" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 group-hover:text-indigo-600">
                      Previous
                    </p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-800 truncate">
                      {allLessons[currentIndex - 1].title}
                    </p>
                  </div>
                </div>
              </button>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 opacity-50">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <ArrowLeft className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-400">
                      Previous
                    </p>
                    <p className="text-sm font-semibold text-gray-400">
                      No previous lesson
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Lesson Button */}
            {currentIndex < allLessons.length - 1 ? (
              <button
                onClick={() => {
                  if (currentIndex < allLessons.length - 1)
                    navigate(`/${cid}/${allLessons[currentIndex + 1].id}`);
                }}
                className="group cursor-pointer relative overflow-hidden rounded-lg border border-emerald-200 bg-white p-3 text-right transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                <div className="flex items-center gap-2 justify-end">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 group-hover:text-emerald-600 text-right">
                      Next
                    </p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-800 truncate">
                      {allLessons[currentIndex + 1].title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 group-hover:bg-emerald-100">
                      <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:text-emerald-700" />
                    </div>
                  </div>
                </div>
              </button>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 opacity-50">
                <div className="flex items-center gap-2 justify-end">
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-xs font-medium text-gray-400">Next</p>
                    <p className="text-sm font-semibold text-gray-400">
                      Course completed
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Right Sidebar - Table of Contents */}
      <aside className="hidden lg:block w-56 border-l bg-muted/30">
        <ScrollArea className="h-full p-4 space-y-2">
          <h3 className="font-semibold text-sm">On this page</h3>
          {currentLesson?.sections?.map((s: any) => (
            <button
              key={s.id}
              onClick={() =>
                document
                  .getElementById(s.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={cn(
                "w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors",
                activeFragment === s.id
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-500"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {s.title}
            </button>
          ))}
        </ScrollArea>
      </aside>
    </div>
  );
}

export default CourseLayout;
