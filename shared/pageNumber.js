export default function curPageNumber({ modulenumber }) {
  if (modulenumber !== undefined && modulenumber !== null) {
    // Extracting the module number (module-1), and returning its last index.
    const moduleNumberNumeric = parseInt(modulenumber?.split("-")[1], 10);
    const prevPgNumber = moduleNumberNumeric - 1;
    const nextPgNumber = moduleNumberNumeric + 1;

    const prevPg =
      moduleNumberNumeric > 0 &&
      `/CourseContent/module-${moduleNumberNumeric - 1}/module-${
        moduleNumberNumeric - 1
      }-a`;
    const nextPg =
      // 8 is the last module
      moduleNumberNumeric < 7 &&
      `/CourseContent/module-${moduleNumberNumeric + 1}/module-${
        moduleNumberNumeric + 1
      }-a`;

    return [prevPg, nextPg, prevPgNumber, nextPgNumber];
  } else {
    return console.error("module number not found", modulenumber);
  }
}


