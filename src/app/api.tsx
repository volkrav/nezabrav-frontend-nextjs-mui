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
