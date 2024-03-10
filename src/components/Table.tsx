import "./Table.css";
import { Link } from "react-router-dom";

import { FaRegCopy } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
function TableCard() {
  return (
    <>
      <section className="table-card">
        <div>
          package_name
          <RiPlayListAddLine />
        </div>
        <Link style={{ border: "none" }} to="/package">
          maintainer
        </Link>
        <em>description</em>
        <div>
          <FaRegCopy />
          copy_command
        </div>
      </section>
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
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </section>
    </>
  );
}
