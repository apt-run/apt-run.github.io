import "./Table.css";
import { Link } from "react-router-dom";

import { FaRegCopy } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

function CopyComponent() {
  return (
    <section className="copyinput">
      <div>copy_command</div>
      <FaRegCopy />
    </section>
  );
}
function TableCard() {
  return (
    <>
      <section className="tablecard">
        <div className="tablecardtitle">
          <div>package_name</div>
          <RiPlayListAddLine />
        </div>
        <section className="tablecardlink">
          <Link style={{ border: "none" }} to="/package">
            package_link
          </Link>
          <Link style={{ border: "none" }} to="/package">
            <FaExternalLinkAlt />
          </Link>
        </section>
        <CopyComponent />
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
      </section>
    </>
  );
}
