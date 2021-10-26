function showSalary(users, age) {
  let str = '';
  users.forEach(element => {
    (age >= element.age)
    ? (str += `${element.name}, ${element.balance}\n`)
    : str});
  return str.slice(0, -1);
}
