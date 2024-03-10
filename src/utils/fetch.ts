// type Package = {
//   name: string;
// };

export function getPackage() {
  console.log("Requesting package...");
  fetch("https://sources.debian.org/api/src/libc")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    );
}

export function getPackages() {
  console.log("Requesting packages...");
  fetch("https://sources.debian.org/api/search/code/")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    );
}

export function getPackageList() {
  console.log("Requesting packages...");
  fetch("https://sources.debian.org/api/list/")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    );
}

export function getPackageSearch() {
  console.log("Requesting packages...");
  fetch("https://sources.debian.org/api/search/go/")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    );
}

export function getPackageListPrefix() {
  console.log("Requesting packages...");
  fetch("https://sources.debian.org/api/prefix/libc")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Error fetching package information:", error)
    );
}
