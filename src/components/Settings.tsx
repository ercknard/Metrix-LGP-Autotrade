import React from "react";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Settings() {
  return (
    <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
      <Stack className="flex justify-between" direction="row">
        <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
          Settings
        </Typography>
        <Button className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold">
          <EditIcon />
        </Button>
      </Stack>
      <div className="flex justify-between mt-4 gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Trading Enabled
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          False
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Allow Fees
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          False
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Minimum Sell
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          1.00000000
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Maximum Buy
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          1.00000000
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Trading Rounds
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          1
        </Typography>
      </div>
      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          Slippage
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          0.5%
        </Typography>
      </div>
    </div>
  );
}
