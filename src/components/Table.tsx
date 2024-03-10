import "./Table.css";
import { Link } from "react-router-dom";

function TableCard() {
  return (
    <>
      <section className="table-card">
        <div>package_name</div>
        <div>maintainer</div>
        <Link style={{ border: "none" }} to="/package">
          description
        </Link>
        <div>copy_command</div>
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
