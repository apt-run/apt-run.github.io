import "./Table.css"
import { Link } from "react-router-dom"

import { FaRegCopy } from "react-icons/fa"
import { RiPlayListAddLine } from "react-icons/ri"
import { FaExternalLinkAlt } from "react-icons/fa"

import { useEffect, useState } from "react"
import placeholderlist from "../../data/list.json"
type Data = {
  packages: {
    name: string
  }[]
}

function CopyComponent() {
  return (
    <section className="copyinput">
      <div>copy_command</div>
      <FaRegCopy />
    </section>
  )
}

export default function Table() {
  const API_SEARCH_URL = "http://localhost:3000/search"
  const [data, setData] = useState<Data>(placeholderlist)

  const fetchData = () => {
    return fetch(API_SEARCH_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
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
  const API_SEARCH_URL = "http://localhost:3000/search"
  const [data, setData] = useState<Data>(placeholderlist)

  const fetchData = () => {
    return fetch(API_SEARCH_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
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
            <Link style={{ border: "none" }} to="/package">
              <FaExternalLinkAlt />
            </Link>
          </section>
          <CopyComponent />
        </section>
      ))}
    </>
  )
}
