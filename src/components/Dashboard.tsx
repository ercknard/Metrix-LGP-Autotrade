import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function Dashboard() {
  return (
    <>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md mb-4">
        <div className="flex flex-col gap-4 justify-end">
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Attempt Trade
            </Button>
          </Stack>
        </div>
      </div>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md mb-4">
        <div className="flex flex-col gap-4 justify-end">
          <Typography className="text-[#f5f5f5]" variant="h6">
            Balance
          </Typography>
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
        </div>
      </div>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md mb-4">
        <div className="flex flex-col gap-4 justify-end">
          <Typography className="text-[#f5f5f5]" variant="h6">
            Governor
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Mint
            </Button>
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Manage Gov
            </Button>
          </Stack>
        </div>
      </div>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
        <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
          Execute Transaction
        </Typography>
        <div>
          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="To*"
            variant="outlined"
            helperText="Address or .mrx MNS name"
          />

          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="Value*"
            variant="outlined"
            helperText="Amount of MRX to send"
          />

          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="Data"
            variant="outlined"
            multiline
            rows={5}
            helperText="Optional hexadecimal data"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Clear
            </Button>
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Execute
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
