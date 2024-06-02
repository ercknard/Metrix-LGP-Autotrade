import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Balances() {
  return (
    <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
      {/* <Stack className="flex justify-between" direction="row"> */}
      <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
        Balances
      </Typography>
      {/* <div className="flex justify-end">
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Deposit
            </Button>
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Transfer
            </Button>
          </Stack>
        </div> */}
      {/* </Stack> */}
      <div className="flex justify-between mt-4 gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          MRX
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

      <div className="flex justify-between gap-4">
        <Typography
          className="text-[#e3e3e3] text-right"
          variant="subtitle1"
          gutterBottom
        >
          g
        </Typography>
        <Typography
          className="text-[#e3e3e3] font-inconsolata text-lg"
          variant="subtitle1"
          gutterBottom
        >
          1234567890.00000000
        </Typography>
      </div>

      {/* <div className="flex justify-end mt-2">
        <Stack spacing={2} direction="row">
          <Button
            className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
            variant="contained"
          >
            Deposit
          </Button>
          <Button
            className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
            variant="contained"
          >
            Transfer
          </Button>
        </Stack>
      </div> */}
    </div>
  );
}
