import { useState } from "react";
import ReportsSearchResult from "./ReportsSearchResult";
import SearchBar from "./SearchBar";
import { ESource } from "@/app/api";

export default function SearchModule() {
  const [phone, setPhone] = useState("");

  return (
    <>
      <SearchBar initialValue="" setPhone={setPhone} />

      <ReportsSearchResult source={ESource.nezabrav} phone={phone} />
      <ReportsSearchResult source={ESource.blackbox} phone={phone} />
      <ReportsSearchResult source={ESource.otzyvua} phone={phone} />
    </>
  );
}
