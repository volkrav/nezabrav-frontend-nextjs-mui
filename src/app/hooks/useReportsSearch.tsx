import { useEffect, useState } from "react";
import { CustomerReport, ESource, searchReports } from "../api";

export default function useReportsSearch(source: ESource, phone: string) {
  const [loading, setloading] = useState<boolean>(false);
  const [reports, setReports] = useState<null | Array<CustomerReport>>(null);

  useEffect(() => {
    if (!phone) {
      return;
    }
    setloading(true);
    setReports(null);

    searchReports(source, phone)
      .then(data => {
        setReports(data.reports);
      })
      .catch(error => {
        alert(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [source, phone]);

  return { loading, reports }
}
