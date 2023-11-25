import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import SearchModule from "./SearchModule";
import AddModule from "./AddModule";
import Stack from "@mui/material/Stack";

export interface Props {
  activeTab: string;
  onChange: (value: string) => void;
  phone: string;
}

export default function ActiveModule(props: Props) {
  return (
    <Box>
      <Stack sx={{ mt: "40px", marginX: "auto" }}>
        {props.activeTab === "search" && (
          <SearchModule
            initialValue=""
            onChange={props.onChange}
            phone={props.phone}
          />
        )}
        {props.activeTab === "add" && <AddModule/>}
      </Stack>
    </Box>
  );
}
