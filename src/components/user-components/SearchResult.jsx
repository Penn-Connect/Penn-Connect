import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TagChip from "./TagChip.jsx";

import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { stringToColor, stringAvatar } from "./../global-components/helper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SearchResult({
  name,
  location,
  industry,
  description,
  tag,
}) {
  return (
    <Grid className="card" item>
      <Item>
        <section className="flexBoxCol left">
          <div className="flexBoxRow size5">
            <Avatar className="avatar" {...stringAvatar(name)} />
            <div className="profile flexBoxCol left">
              <div className="name">{name}</div>
              <div className="profile flexBoxRow left">
                <div className="location">{location}</div>
                <div className="bullet">•</div>
                <div className="location">{industry}</div>
              </div>
            </div>
          </div>
          <div className="description">{description}</div>
          <MoreVertIcon className="moreBtn" />
          <div className="flexBoxRow">
            {tag.map((ele, i) => {
              return <TagChip key={ele + i} value={ele} />;
            })}
          </div>
        </section>
      </Item>
    </Grid>
  );
}
