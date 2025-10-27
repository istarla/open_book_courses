import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { NavLink } from "react-router-dom";

type CourseCardProps = {
  id: string;
  title: string;
  noOfLessons: number;
  folderName: string;
  imageURL: string;
  onEdit: (e: any) => void;
};

export function CourseCard({
  id,
  title,
  noOfLessons,
  folderName,
  imageURL,
  onEdit,
}: CourseCardProps) {
  

  return (
    <NavLink to={`${id}`} state={{folderName}}>
      <Card className="relative  shadow-md rounded-2xl overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={onEdit}
        >
          <Edit className="h-4 w-4" />
        </Button>

        <div className="w-full h-30 overflow-hidden">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium">ID:</span> {id}
          </p>
          <p>
            <span className="font-medium">Lessons:</span> {noOfLessons}
          </p>
          <p>
            <span className="font-medium">Folder:</span> {folderName}
          </p>
        </CardContent>
      </Card>
    </NavLink>
  );
}
