let state = {
  histogram: []
};

const addLeftUntilSmall = (i) => {
  const histogram = state.histogram;
  let retHeight = histogram[i];
  let retLength = 0;
  let j, startJ;
  j = startJ = i - 1;
  if (j < 0) return 0;
  while (j >= 0 && histogram[j] >= histogram[i]) {
    j--;
  }
  retLength = startJ - j;
  return retHeight * retLength;
};
const addRightUntilSmall = (i) => {
  const histogram = state.histogram;
  let retHeight = histogram[i];
  let retLength = 0;
  let j, startJ;
  j = startJ = i + 1;
  if (j >= histogram.length) return 0;
  while (j < histogram.length && histogram[j] >= histogram[i]) {
    j++;
  }
  retLength = j - startJ;
  return retHeight * retLength;
};

const largestRectArea = (histogram) => {
  state.histogram = histogram;
  let maxRectArea = 0;
  histogram.forEach((curr, i) => {
    const currRectArea = addLeftUntilSmall(i) + curr + addRightUntilSmall(i);
    if (maxRectArea < currRectArea) maxRectArea = currRectArea;
  });
  return maxRectArea;
};
const histogram = [1, 3, 2, 1, 2];
console.log("histogram: ", histogram);
console.log("maxRectArea: ", largestRectArea(histogram));
