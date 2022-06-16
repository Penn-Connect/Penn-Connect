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
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

import SearchResult from "./user-components/SearchResult.jsx";
import { useAuth } from "../contexts/AuthContext";

import Header from "./global-components/Header";
import SearchData from "../assets/json/dummyConnect.json";
import Data from "../assets/json/dummyUser.json";

import searchMeta from "../assets/json/searchBox.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let DummySearch = SearchData.data.results.filter((ele, i) => {
  return i >= 0 && i < 3;
});

export default function Home({ perPage }) {
  // const { currentUser } = useAuth();
  //   <div>
  //     <Header name={"Pijamo Ngullie"} />
  //     {currentUser && currentUser.email}
  //   </div>;

  let Dummy = Data.data.results;
  let id = 0;
  let name = `${Dummy[id].name.firstName} ${Dummy[id].name.lastName}`;

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    // console.log(DummySearch);
    // console.log(value);
    DummySearch = SearchData.data.results.filter((ele, i) => {
      return i >= (value - 1) * perPage && i < value * perPage;
    });
    console.log(DummySearch);
  };

  return (
    <div id="connectPage">
      <Header id="header" name={name} />

      <Box id="connectContainer" sx={{ flexGrow: 1 }}>
        <Grid id="connectContainerMain" container spacing={3}>
          {/* Left */}
          {
            <Grid className="" item xs={3}>
              <Item className="searchContainer">
                <TextField
                  className="search"
                  label="Search by Name"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="search"
                  label="Location"
                  sx={{ m: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl id="status">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Current Student"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Alumni"
                      control={<Radio size="small" />}
                      label="Alumni"
                    />
                    <FormControlLabel
                      value="Current Student"
                      control={<Radio size="small" />}
                      label="Current Student"
                    />
                  </RadioGroup>
                </FormControl>

                <Autocomplete
                  className="selection"
                  multiple
                  id="tags-outlined"
                  options={searchMeta.language}
                  size="small"
                  limitTags={2}
                  // getOptionLabel={(option) => option.title}
                  // defaultValue={[searchMeta.language[0]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Programming Language"
                      // placeholder=""
                    />
                  )}
                />
                <Autocomplete
                  className="selection"
                  multiple
                  id="tags-outlined"
                  options={searchMeta.industry}
                  size="small"
                  limitTags={2}
                  // getOptionLabel={(option) => option.title}
                  // defaultValue={[searchMeta.industry[0]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Industry"
                      // placeholder=""
                    />
                  )}
                />
                <Autocomplete
                  className="selection"
                  multiple
                  id="tags-outlined"
                  options={searchMeta.hobby}
                  size="small"
                  limitTags={2}
                  // getOptionLabel={(option) => option.title}
                  // defaultValue={[searchMeta.hobby[0]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Hobbies and Activities"
                      // placeholder=""
                    />
                  )}
                />
                <Button id="searchBtn" variant="contained">
                  SEARCH
                </Button>
              </Item>
            </Grid>
          }
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
