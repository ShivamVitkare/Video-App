import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import TvIcon from '@mui/icons-material/Tv';import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()

  useEffect(()=>{
if(value===0)navigate("/");
else if(value===1)navigate("/movies");
else if(value===2)navigate("/series");
else if(value===3)navigate("/search");



  },[value,navigate])

  return (
    <div className="box">
      <Box
        sx={{
          width: "100%",
          bottom: 0,
          position: "fixed",
          backgroundColor: "darkgray",
          zIndex: 100,
        }}
      >
        <BottomNavigation
          sx={{
            backgroundColor: "#161617",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            icon={<LocalMoviesSharpIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="TV Series"
            icon={<TvIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
