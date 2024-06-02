import React from "react";
import { Typography } from "@mui/material";

export default function LGPStatus() {
  return (
    <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
      <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
        LGP Status
      </Typography>
      <div className="flex justify-between mt-4 gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Price
        </Typography>
        <Typography
          className="text-[#e3e3e3] font-inconsolata text-lg"
          variant="subtitle1"
          gutterBottom
        >
          1.00000000
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          wMRX
        </Typography>
        <Typography
          className="text-[#e3e3e3] font-inconsolata text-lg"
          variant="subtitle1"
          gutterBottom
        >
          1234567890.00000000
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          gMRX
        </Typography>
        <Typography
          className="text-[#e3e3e3] font-inconsolata text-lg"
          variant="subtitle1"
          gutterBottom
        >
          1234567890.00000000
        </Typography>
      </div>
    </div>
  );
}
