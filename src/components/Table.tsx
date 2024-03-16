import "./Table.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { FaRegCopy } from "react-icons/fa"
import { RiPlayListAddLine } from "react-icons/ri"
// import { FaExternalLinkAlt } from "react-icons/fa"

type Data = {
  results: {
    name: string
    installs: number
    maintainer: string
  }[]
}

export default function Table() {
  const [data, setData] = useState<Data>()
  let { search } = useLocation()

  async function fetchData() {
    const response = await fetch("http://localhost:3000/search" + search)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [search])

  if (data?.results != null) {
    return (
      <>
        <section className="listcontainer">
          {data.results.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </section>
        <section className="table">
          <TableCard data={data} />
        </section>
      </>
    )
    return <></>
  }
}

function TableCard({ data }: { data: Data }) {
  return (
    <>
      {data.results.map((item, index) => (
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
