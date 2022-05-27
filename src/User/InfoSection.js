import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TagChip from "./TagChip.js";
import { styled } from "@mui/material/styles";

import { ReactComponent as Edit } from "../assets/svg/Edit.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function InfoSection({ title, collection }) {
  return (
    <Grid className="card" item>
      <Item>
        <section className="flexBoxCol left">
          <div className="header">{title}</div>
          <Edit className="editBtn" />
          <div className="flexBoxRow">
            {collection.map((ele, i) => {
              return <TagChip key={ele + i} value={ele} />;
            })}
          </div>
        </section>
      </Item>
    </Grid>
  );
}
