import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AutoGovernors() {
  return (
    <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
      <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
        Auto Governors
      </Typography>
      <div className="flex justify-between">
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          Count
        </Typography>
        <Typography className="text-[#e3e3e3]" variant="subtitle1" gutterBottom>
          1920
        </Typography>
      </div>
      {/* <div className="flex justify-end mt-2">
        <Stack spacing={2} direction="row">
          <Button
            className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
            variant="contained"
          >
            Create
          </Button>
          <Button
            className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
            variant="contained"
          >
            Manage
          </Button>
        </Stack>
      </div> */}
    </div>
  );
}
