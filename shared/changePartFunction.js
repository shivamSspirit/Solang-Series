export default function changePartFunction({
  modulenumber,
  modulepart,
  totalParts,
}) {

  console.log("obj",{
  modulenumber,
  modulepart,
  totalParts,
  })
  // Extracting the module number (module-1), and returning its last index.
  const modulepartChar = modulepart?.split("-")[2];
  const moduleNumberNumeric = parseInt(modulenumber?.split("-")[1], 10);

  console.log("obj1", {
    modulepartChar,
    moduleNumberNumeric
  })

  const curPartNum = modulepartChar.charCodeAt(0) - "a".charCodeAt(0);


  const prevNumToChar = String.fromCharCode(97 + curPartNum - 1);
  const nextNumToChar = String.fromCharCode(97 + curPartNum + 1);

  console.log("obj2", {
    curPartNum,
    prevNumToChar,
    nextNumToChar
  })

  const prevPg =
    curPartNum > 0 &&
    `/CourseContent/${modulenumber}/${modulenumber}-${prevNumToChar}`;


  const nextPg =
    // 8 is the last module
    curPartNum < totalParts - 1 &&
    `/CourseContent/${modulenumber}/${modulenumber}-${nextNumToChar}`;

    console.log("obj3",{
      prevPg,
      nextPg
    })

  const prevPgText = `${moduleNumberNumeric}${prevNumToChar}`;
  const nextPgText = `${moduleNumberNumeric}${nextNumToChar}`;

  console.log("obj4", {
    prevPgText,
    nextPgText
  })

  return [prevPg, nextPg, prevPgText, nextPgText];
}
