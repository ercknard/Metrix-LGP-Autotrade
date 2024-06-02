import React from "react";
import { Typography } from "@mui/material";

export default function ContractAddress() {
  return (
    <div className="bg-[#342344] p-4 rounded-md drop-shadow-md min-w-[400px]">
      <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
        Contract Address
      </Typography>
      <Typography
        className="text-[#f8f8f8] font-inconsolata text-lg"
        variant="subtitle1"
        gutterBottom
      >
        66197062cc101d6de11392fc857768c34babcbe2
      </Typography>
    </div>
  );
}
