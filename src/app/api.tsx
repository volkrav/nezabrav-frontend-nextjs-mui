export type CustomerReport = {
  report: string;
};

export type SearchApiResponse = {
  reports: Array<CustomerReport>;
  status_blackbox: "online" | "offline";
};

export enum ESource {
  nezabrav = "nezabrav",
  blackbox = "blackbox",
  otzyvua = "otzyvua",
}

const baseUrl = "http://127.0.0.1:8000/";

export async function searchReports(
  source: ESource,
  phone: string
): Promise<SearchApiResponse> {
  const url =
    baseUrl + encodeURIComponent(source) + "/" + encodeURIComponent(phone);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function addReport(data: {
  phone: string;
  firstName: string;
  lastName: string;
  ttn: string;
  report: string;
}) {
  const res = await fetch(baseUrl + "add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: data.phone,
      first_name: data.firstName,
      last_name: data.lastName,
      ttn: data.ttn,
      report: data.report,
    }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.message ?? "Unknown error");
  }
  return json.message;
}
