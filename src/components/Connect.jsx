import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import "../assets/css/User.css";
import "../assets/css/Connect.css";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import SearchResult from "./user-components/SearchResult.jsx";

import Header from "./global-components/Header";
import SearchData from "../assets/json/dummyConnect.json";
import Data from "../assets/json/dummyUser.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let perPage = 3;

let Dummy = Data.data.results;
let DummySearch = SearchData.data.results.filter((ele, i) => {
  return i >= 0 && i < perPage;
});
let id = 0;
let name = `${Dummy[id].name.firstName} ${Dummy[id].name.lastName}`;

export default function Connect() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    DummySearch = SearchData.data.results.filter((ele, i) => {
      return i >= (value - 1) * perPage && i < value * perPage;
    });
  };

  return (
    <div id="connectPage">
      <Header id="header" name={name} />

      <Box id="connectContainer" sx={{ flexGrow: 1 }}>
        <Grid id="connectContainerMain" container spacing={3}>
          {/* Left */}
          <Grid className="" item xs={3}>
            searchbox
          </Grid>
          {/* Right */}
          <Grid item xs={9}>
            <Grid className="GridsCol searchResultPage" container spacing={3}>
              {DummySearch.map((ele) => {
                return (
                  <SearchResult
                    name={ele.name}
                    location={ele.location}
                    industry={ele.industry}
                    description={ele.description}
                    tag={ele.tag}
                  />
                );
              })}
            </Grid>
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(SearchData.data.results.length / perPage)}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
