function getMinMax(str) {
  let arrStr = str.split(' ').filter(item => +item).sort((a,b) => a-b);
  return {min : +arrStr[0], max : +arrStr[arrStr.length-1]};
}
