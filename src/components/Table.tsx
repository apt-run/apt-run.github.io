import "./Table.css";
import { Link } from "react-router-dom";

import { FaRegCopy } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

import package_list_json from "../../data/list.json";

function CopyComponent() {
  return (
    <section className="copyinput">
      <div>copy_command</div>
      <FaRegCopy />
    </section>
  );
}

type TableCard = {
  package_name: string;
  package_link: string;
  package_command: string;
};

export interface List {
  packages: Package[];
}
export interface Package {
  name: string;
}

function TableCard() {
  const data: List = package_list_json;
  const slice = data.packages.slice(0, 20);

  return (
    <>
      {slice.map((item) => (
        <section className="tablecard">
          <div className="tablecardtitle">
            <Link style={{ border: "none" }} to="/package">
              <div>{item.name}</div>
            </Link>
            <RiPlayListAddLine />
          </div>
          <section className="tablecardlink">
            <div></div>
            <Link style={{ border: "none" }} to="/package">
              <FaExternalLinkAlt />
            </Link>
          </section>
          <CopyComponent />
        </section>
      ))}
    </>
  );
}

export default function Table() {
  return (
    <>
      <section className="table">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </section>
    </>
  );
}
