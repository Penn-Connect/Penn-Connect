import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import SocialBadge from "./SocialBadge.jsx";

import { stringToColor, stringAvatar } from "./../global-components/helper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ContactInfo({ name, location, social }) {
  return (
    <Grid className="card" item>
      <Item className="flexBoxRow">
        <section className="headerCard flexBoxRow center">
          <div className="flexBoxRow size5">
            <Avatar className="avatar" {...stringAvatar(name)} />
            <div className="profile flexBoxCol left">
              <div className="name">{name}</div>
              <div className="location">{location}</div>
            </div>
          </div>

          <div className="social flexBoxRow">
            {social.map((ele) => {
              return <SocialBadge key={ele} svg={ele} />;
            })}
          </div>
        </section>
      </Item>
    </Grid>
  );
}
