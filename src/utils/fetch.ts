const API_URL = "http://localhost:3000/"
const API_SEARCH_URL = "http://localhost:3000/search"
// const API_PACKGE_URL = "http://localhost:3000/package"

export interface Data {
  packages: Package[]
}

export interface Package {
  name: string
}

export function getPackage() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json()
    })
    .then((data) => console.log(data))
    // .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    )
}

export function getPackages() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    )
}

export function getList() {
  fetch(API_SEARCH_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    )
}

export function getSearch() {
  fetch(API_SEARCH_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    )
}

export function getPackageListPrefix() {
  console.log("Requesting packages...")
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    )
}
