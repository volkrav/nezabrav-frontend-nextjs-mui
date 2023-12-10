import { ESource } from "@/app/api";
import useReportsSearch from "@/app/hooks/useReportsSearch";
import Reports from "./Reports";
import NoResults from "./NoResults";
import LoadingIndicator from "./LoadingIndicator";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export type Props = {
  source: ESource;
  phone: string;
};

export default function ReportsSearchResult(props: Props) {
  const { loading, reports } = useReportsSearch(props.source, props.phone);

  return (
    <Stack sx={{ mt: "25px"}}>
      {props.phone && (
        <Box
          sx={{
            width: "100%",
            paddingY: "20px",
            paddingX: "15px",
            background: "#f8f9fc",
            minHeight: "100px",
            boxSizing: "border-box",
            borderRadius: "3px",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
        >
          <h3>{props.source + ":"} </h3>
          {loading && <LoadingIndicator />}
          {reports?.length === 0 && <NoResults phone={props.phone} />}
          {reports && reports.length > 0 && <Reports reports={reports} />}
        </Box>
      )}
    </Stack>
  );
}
