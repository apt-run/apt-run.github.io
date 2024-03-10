// type Package = {
//   name: string;
//   installs: number;
//   description: string;
//   maintainer_link: string;
//   versions: string[];
//   tags: string[];
//   license: string;
// };

// async function getPackage(package_url: string): Package {}
// async function getSearch(search_url: string): Packages {}

async function getSearch() {}

export async function logMovies() {
  const response = await fetch(
    "https://sources.debian.org/patches/api/prefix/libz/",
    { mode: "no-cors" }
  );
  console.log(response);
  const movies = await response.json();
  console.log(movies);
}

fetch("https://sources.debian.org/patches/api/prefix/libz/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
