import { ESource } from "@/app/api";
import useReportsSearch from "@/app/hooks/useReportsSearch";
import Reports from "./Reports";
import NoResults from "./NoResults";
import LoadingIndicator from "./LoadingIndicator";
import Box from "@mui/material/Box";

export type Props = {
  source: ESource;
  phone: string;
};

export default function ReportsSearchResult(props: Props) {
  const { loading, reports } = useReportsSearch(props.source, props.phone);

  return (
    <Box>
      <h3>{props.phone && props.source+":"} </h3>
      {loading && <LoadingIndicator />}
      {reports?.length === 0 && <NoResults phone={props.phone} />}
      {reports && reports.length > 0 && <Reports reports={reports} />}
    </Box>
  );
}
