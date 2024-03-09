import "./Table.css";
import { Link } from "react-router-dom";

function TableCard() {
  return (
    <>
      <section className="table-card">
        <div>Title</div>
        <div>Subtitle</div>
        <Link to="/package">Package_Name</Link>
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
