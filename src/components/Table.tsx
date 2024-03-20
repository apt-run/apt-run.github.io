import "./Table.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { createClient } from "@supabase/supabase-js";

import { FaRegCopy } from "react-icons/fa"
import { RiPlayListAddLine } from "react-icons/ri"
import { Database } from "../supabase";
// import { FaExternalLinkAlt } from "react-icons/fa"


const supabase = createClient<Database>("https://ncqhfzipwmfzyrfuynuw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcWhmemlwd21menlyZnV5bnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4OTU3ODIsImV4cCI6MjAyNjQ3MTc4Mn0.S_d-fyU2ZJuiAJXnwiiHrtS_UyDGMpUkFP60V-hMSCQ");
interface Packages {
	rank: number;
	name: string;
	installs: number;
	maintainer: string;
}

export default function Table() {
  const [ packages, setPackages ] = useState<Packages[]>([]);
  const { search } = useLocation()
  const search_string = search.split("=")[1]

  useEffect(() => {
    getPackages();
  }, [search]);

  async function getPackages() {
    const { data } = await supabase.from("packages").select().like('name', `%${search_string}%`).limit(20);
    setPackages(data || []);
  }

  if (packages != null) {
    return (
      <>
        <section className="listcontainer">
          {packages.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </section>
        <section className="table">
          <TableCard packages={packages} />
        </section>
      </>
    )
  }
  return <></>
}

function TableCard({ packages }: { packages: Packages[] }) {
  return (
    <>
      {packages.map((item, index) => (
        <section className="tablecard" key={index}>
          <div className="tablecardtitle">
            <Link style={{ border: "none" }} to="/package">
              <div>{item.name}</div>
            </Link>
            <RiPlayListAddLine />
          </div>
          <section className="tablecardlink">
            <div></div>
            {/* <Link style={{ border: "none" }} to="/package"> */}
            {/* <FaExternalLinkAlt /> */}
            {/* </Link> */}
          </section>
          <CopyComponent />
        </section>
      ))}
    </>
  )
}

function CopyComponent() {
  return (
    <section className="copyinput">
      <div>copy_command</div>
      <FaRegCopy />
    </section>
  )
}
