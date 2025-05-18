import React, { useState, useEffect } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WalletIcon from "@mui/icons-material/Wallet";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, useLocation } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeMap = ["/", "/wallet", "/activity", "/account"];
  const pathToIndex = {
    "/": 0,
    "/wallet": 1,
    "/activity": 2,
    "/account": 3,
  };

  const [value, setValue] = useState(pathToIndex[location.pathname] || 0);

  useEffect(() => {
    setValue(pathToIndex[location.pathname] ?? 0);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routeMap[newValue]);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 10,
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          borderRadius: 5,
          backgroundColor: "black",
          mx: 1,
          "& .MuiBottomNavigationAction-root": {
            color: "grey",
          },
          "& .Mui-selected": {
            color: "white",
          },
          marginBottom: 2,
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Wallet" icon={<WalletIcon />} />
        <BottomNavigationAction label="Activity" icon={<HistoryIcon />} />
        <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Tabs;
