import React from "react";
import { Box, CssBaseline, Paper } from "@mui/material";

const MobileContainer = ({ children }) => {
  return (
    <CssBaseline>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          bgcolor: "#f0f2f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 400,
            height: "100vh",
            borderRadius: 2,
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Paper>
      </Box>
    </CssBaseline>
  );
};

export default MobileContainer;
