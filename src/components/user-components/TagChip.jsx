import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import "../../assets/css/TagChip.css";

export default function TagChip({ value }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={value}
        className="tagChip"
        size="small"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
