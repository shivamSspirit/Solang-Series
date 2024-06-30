export const findNavs = (
  allDocuments,
  modulenumber,
  modulepart,
  totalParts,
  idasfilename,
  lession
) => {
  let nextPG;
  let prevPG;
  let moduleChar;
  let moduleCharNext;
  let prevFile;
  let NextFile;

  // Helper functions to filter and sort documents
  const retrunAllFileBymoduleNumberLevel = (modulenumber) =>
    allDocuments
      .filter((module) => module.moduleNumber === modulenumber)
      .sort((a, b) => a.orderNumber - b.orderNumber);

  const retrunAllFileBymodulePartLevel = (modulePart) =>
    allDocuments
      .filter((doc) => doc.modulePart === modulePart)
      .sort((a, b) => a.orderNumber - b.orderNumber);

  // Get current lesson order number and module number
  let findCurrentOrdernum = lession.orderNumber;
  let findCurrrentOrderNumberforprev = lession.orderNumber;
  let currentModuleNumberforPrev = parseInt(modulenumber.match(/\d+/)[0], 10);
  let currentModuleNumber = parseInt(modulenumber.match(/\d+/)[0], 10);

  let minModuleNumber = 0;
  let maxModuleNumber = 7;

  function NavigateNext() {
    let files = retrunAllFileBymoduleNumberLevel(modulenumber);
    let partlevelfiles = retrunAllFileBymodulePartLevel(modulepart);

    let currentIndex = retrunAllFileBymodulePartLevel(modulepart).findIndex(
      (doc) => doc.orderNumber === findCurrentOrdernum
    );

    // Move to the next file
    if (findCurrentOrdernum < files.length - 1) {
      // const modulepartChar = modulepart?.split("-")[2];

      if (currentIndex < partlevelfiles.length - 1) {
        moduleCharNext = modulepart?.split("-")[2] === "a" ? "a" : "b";
      } else {
        moduleCharNext = modulepart?.split("-")[2] === "a" ? "b" : "a";
      }
      findCurrentOrdernum++;
    } else {
      // Move to the next module if at the end of files
      if (
        modulenumber === "module-7" &&
        modulepart?.split("-")[2] === "b" &&
        currentIndex === partlevelfiles.length - 1
      ) {
        return null;
      } else {
        findCurrentOrdernum = 0;
      }
      currentModuleNumber =
        currentModuleNumber < maxModuleNumber
          ? currentModuleNumber + 1
          : minModuleNumber;
      files = retrunAllFileBymoduleNumberLevel(`module-${currentModuleNumber}`);

      if (currentIndex < partlevelfiles.length - 1) {
        moduleCharNext = modulepart?.split("-")[2] === "a" ? "a" : "b";
      } else {
        moduleCharNext = modulepart?.split("-")[2] === "a" ? "b" : "a";
      }
      NextFile = files[findCurrentOrdernum].thisFileName.slice(0,17);
      return `CourseContent/module-${currentModuleNumber}/module-${currentModuleNumber}-${moduleCharNext}/${files[findCurrentOrdernum].thisFileName}`;
    }
    NextFile = files[findCurrentOrdernum].thisFileName.slice(0,17);
    return `CourseContent/module-${currentModuleNumber}/module-${currentModuleNumber}-${moduleCharNext}/${files[findCurrentOrdernum].thisFileName}`;
  }

  function navigatePrevious() {
    // Get files for the current module
    let files = retrunAllFileBymoduleNumberLevel(modulenumber);
  //  let partlevelfiles = retrunAllFileBymodulePartLevel(modulepart);
    let currentIndex = retrunAllFileBymodulePartLevel(modulepart).findIndex(
      (doc) => doc.orderNumber === findCurrrentOrderNumberforprev
    );
    // Move to the previous file
    if (findCurrrentOrderNumberforprev > 0) {

      findCurrrentOrderNumberforprev--;

      if (currentIndex > 0) {
        moduleChar = modulepart?.split("-")[2] === "a" ? "a" : "b";
      } else {
        moduleChar = modulepart?.split("-")[2] === "a" ? "b" : "a";
      }
    } else {
      // Move to the previous module if at the start of files
      if (
        currentModuleNumberforPrev === 0 &&
        modulepart?.split("-")[2] === "a" &&
        currentIndex === 0
      ) {
        return null;
      } else {
        findCurrrentOrderNumberforprev = files.length - 1;
      }

      currentModuleNumberforPrev =
      currentModuleNumberforPrev > minModuleNumber
        ? currentModuleNumberforPrev - 1
        : maxModuleNumber;
    files = retrunAllFileBymoduleNumberLevel(`module-${currentModuleNumberforPrev}`);
    findCurrrentOrderNumberforprev = files.length - 1; // Go to the last file in the previous module
     

      if (currentIndex > 0) {
        moduleChar = modulepart?.split("-")[2] === "a" ? "a" : "b";
      } else {
        moduleChar = modulepart?.split("-")[2] === "b" ? "a" : "b";
      }
    prevFile = files[findCurrrentOrderNumberforprev].thisFileName.slice(0,17);
      return `CourseContent/module-${currentModuleNumberforPrev}/module-${currentModuleNumberforPrev}-${moduleChar}/${files[findCurrrentOrderNumberforprev].thisFileName}`;
    }
    prevFile = files[findCurrrentOrderNumberforprev].thisFileName.slice(0,17);
    return `CourseContent/module-${currentModuleNumberforPrev}/module-${currentModuleNumberforPrev}-${moduleChar}/${files[findCurrrentOrderNumberforprev]?.thisFileName}`;
  }

  nextPG = NavigateNext();
  prevPG = navigatePrevious();

  // Return navigation info
  return {
    nextPG,
    prevPG,
    currentModuleNumber,
    currentModuleNumberforPrev,
    moduleChar,
    prevFile,
    NextFile,
    moduleCharNext
  };
};
