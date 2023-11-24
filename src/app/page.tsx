"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/MediaCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Stack } from "@mui/material";
import SearchModule from "@/components/SearchModule";
import AddModule from "@/components/AddModule";

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("search");
  const [phone, setPhone] = useState("");

  return (
    <Stack>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mt: "25px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(event, value) => setActiveTab(value)}
        >
          <Tab value="search" label="Пошук" {...a11yProps(0)} />
          <Tab value="add" label="Додати" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box>
        {activeTab === "search" && (
          <SearchModule initialValue="" onChange={setPhone} />
        )}
        {activeTab === "add" && <AddModule />}
      </Box>
      <Box>
        <Typography variant="h1" gutterBottom>
          {phone}
        </Typography>
      </Box>
    </Stack>
  );
}
