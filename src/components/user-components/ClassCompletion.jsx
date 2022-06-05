import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import ClassBadge from "./ClassBadge.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#011F5B" : "#308fe8",
  },
}));

function CircularProgressWithLabel({ value }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        className="offCircle"
        variant="determinate"
        value={100}
      />
      <CircularProgress
        className="mainCircle"
        variant="determinate"
        value={value * 10}
      />
      <Box
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {/* {`${Math.round(props.value)}%`} */}
          {`${value}/10`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ClassCompletion({ classes, useCircular }) {
  return (
    <Grid className="card" item>
      <Item>
        <section id="courseBox" className="flexBoxRow center">
          <div className="flexBoxRow center">
            <div>Classes Completed</div>
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                marginLeft: "10px",
              }}
            >
              {/* Circular Bar */}
              {useCircular && (
                <CircularProgressWithLabel value={classes.length} />
              )}
            </Box>
          </div>
          {/* Progress Bar */}
          {!useCircular && (
            <Box sx={{ width: "40%" }}>
              <BorderLinearProgress
                variant="determinate"
                value={classes.length * 10}
              />
            </Box>
          )}
          {!useCircular && <div>{classes.length}/10 </div>}
          <div className="classBadgeList">
            {classes.map((ele) => {
              return (
                <ClassBadge variant="determinate" key={ele} course={ele} />
              );
            })}
          </div>
        </section>
      </Item>
    </Grid>
  );
}
