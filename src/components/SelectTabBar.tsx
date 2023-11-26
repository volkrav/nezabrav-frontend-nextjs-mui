import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

interface Props {
  activeTab: string;
  onChange: (value: string) => void;
}

export default function SelectTabBar(props: Props) {
  return (
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
        value={props.activeTab}
        onChange={(event, value) => props.onChange(value)}
      >
        <Tab value="search" label="Знайти" {...a11yProps(0)} />
        <Tab value="add" label="Додати" {...a11yProps(1)} />
      </Tabs>
    </Box>
  );
}
