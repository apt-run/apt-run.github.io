type Package = {
  name: string;
  installs: number;
  description: string;
  maintainer_link: string;
  versions: string[];
  tags: string[];
  license: string;
};

export function getPackage() {
  console.log("Requesting package...");
  fetch("https://sources.debian.org/api/src/docker")
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
