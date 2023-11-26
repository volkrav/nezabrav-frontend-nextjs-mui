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
    <Stack sx={{ mt: "25px", border: "solid 2px black" }}>
      {props.phone && (
        <Box sx={{border: "solid 2px red"}}>
          <h3>{props.source + ":"} </h3>
          {loading && <LoadingIndicator />}
          {reports?.length === 0 && <NoResults phone={props.phone} />}
          {reports && reports.length > 0 && <Reports reports={reports} />}
        </Box>
      )}
    </Stack>
  );
}
