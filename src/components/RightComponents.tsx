import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Dashboard from "./Dashboard";
import StandardTX from "./StandardTX";

export default function RightComponents() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="bg-[#342344] rounded-md drop-shadow-md min-w-[750px]"
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              className="text-[#e3e3e3] font-semibold"
              label="Dashboard"
              value="1"
            />
            <Tab
              className="text-[#e3e3e3] font-semibold"
              label="AutoGovernor"
              value="2"
            />
            <Tab
              className="text-[#e3e3e3] font-semibold"
              label="MultiDelegateCall"
              value="3"
            />
            <Tab
              className="text-[#e3e3e3] font-semibold"
              label="MultiCall"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel className="bg-[#48305e]" value="1">
          <Dashboard />
        </TabPanel>
        <TabPanel className="bg-[#48305e]" value="2">
          <StandardTX />
        </TabPanel>
        <TabPanel className="bg-[#48305e]" value="3">
          Item Two
        </TabPanel>
        <TabPanel className="bg-[#48305e]" value="4">
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
}
