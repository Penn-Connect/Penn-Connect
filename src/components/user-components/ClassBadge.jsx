import Chip from "@mui/material/Chip";
import "../../assets/css/ClassBadge.css";

export default function ClassBadge({ course }) {
  return (
    <Chip
      className="courseChip"
      label={
        <div>
          <div>{course.split(" ")[0]}</div>
          <div>{course.split(" ")[1]}</div>
        </div>
      }
    />
  );
}
