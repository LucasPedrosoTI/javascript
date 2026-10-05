function generateArray(totalWidth, totalHeight, nLines, nCol, _pop) {
  let xElements = [0],
    baseX = totalWidth / (nLines - 1),
    yElements = [0],
    baseY = totalHeight / (nCol - 1),
    finalArray = [];

  for (let i = 1; i <= nLines - 1; i++) {
    xElements.push(baseX * i);
  }

  for (let i = 1; i <= nCol - 1; i++) {
    yElements.push(baseY * i);
  }

  for (let z = 0; z < yElements.length; z++) {
    for (let i = 0; i < xElements.length; i++) {
      finalArray.push([xElements[i], yElements[z]]);
    }
  }

  if (_pop) {
    for (let i = 0; i < _pop; i++) {
      finalArray.pop();
    }
  }

  // console.log(finalArray);

  return finalArray;
}
