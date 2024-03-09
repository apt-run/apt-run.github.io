type Package = {
  name: string;
  installs: number;
  description: string;
  maintainer_link: string;
  versions: string[];
  tags: string[];
  license: string;
};
type Packages = Package[];

// async function getPackage(package_url: string): Package {}
// async function getSearch(search_url: string): Packages {}
