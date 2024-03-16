import "./Table.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import placeholderlist from "../../data/list.json"

import { FaRegCopy } from "react-icons/fa"
import { RiPlayListAddLine } from "react-icons/ri"
// import { FaExternalLinkAlt } from "react-icons/fa"

type Data = {
  packages: {
    name: string
  }[]
}

export default function Table() {
  const [data, setData] = useState<Data>(placeholderlist)

  async function fetchData() {
    const response = await fetch("http://localhost:3000/search")
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <section className="listcontainer">
        {data.packages.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </section>
      <section className="table">
        <TableCard />
      </section>
    </>
  )
}

function TableCard() {
  const [data, setData] = useState<Data>(placeholderlist)

  async function fetchData() {
    const response = await fetch("http://localhost:3000/search")
    const data = await response.json()
    return setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {data.packages.map((item, index) => (
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
