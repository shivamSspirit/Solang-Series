export default function changePartFunction({
  modulenumber,
  modulepart,
  totalParts,
}) {
  // Extracting the module number (module-1), and returning its last index.
  const modulepartChar = modulepart?.split("-")[2];
  const moduleNumberNumeric = parseInt(modulenumber?.split("-")[1], 10);

  //   console.log(modulepartChar, " Module part");
  const curPartNum = modulepartChar.charCodeAt(0) - "a".charCodeAt(0);

  const prevNumToChar = String.fromCharCode(97 + curPartNum - 1);
  const nextNumToChar = String.fromCharCode(97 + curPartNum + 1);

  // console.log(curPartNum, " CurpartNum");

  const prevPg =
    curPartNum > 0 &&
    `/CourseContent/${modulenumber}/${modulenumber}-${prevNumToChar}`;

  const nextPg =
    // 8 is the last module
    curPartNum < totalParts - 1 &&
    `/CourseContent/${modulenumber}/${modulenumber}-${nextNumToChar}`;

  // console.log(totalParts, " Total parts");
  // console.log(curPartNum, " cur parts");

  const prevPgText = `${moduleNumberNumeric}${prevNumToChar}`;
  const nextPgText = `${moduleNumberNumeric}${nextNumToChar}`;

  //   console.log(prevPg, " Prev page url");
  //   console.log(nextPg, " Next page url");

  //   console.log(prevPgText, " Prev page text");
  //   console.log(nextPgText, " Next page text");

  return [prevPg, nextPg, prevPgText, nextPgText];
}
