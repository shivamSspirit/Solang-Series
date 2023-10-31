export default function curPageNumber({ pathname }) {
  let currentRoute = pathname;

 // console.log(pathname, " curPage");

  // Splitting the url.
  currentRoute = currentRoute.split("/");

  // Extracting the Course1 number, and returning its last index.
  const nextPg = Number(currentRoute[2][currentRoute[2].length - 1]) + 1;
  const prevPg = Number(currentRoute[2][currentRoute[2].length - 1]) - 1;

  return [prevPg, nextPg];
}