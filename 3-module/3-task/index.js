function camelize(str) {
  let result = str.split('-');
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i].split('');
    result[i][0] = result[i][0].toUpperCase();
    result[i] = result[i].join('');
  }
  return result.join('');
}
