function namify(users) {
// 1. 'for' using
  // for (let i = 0; i < users.length; i++) {
  //   users[i] = users[i].name;
  // }
  //   return users;

// 2. forEach method using with theArr

    // users.forEach(function(element, index, theArr){
    //   theArr[index] = theArr[index].name;
    // });
    // return users;

// 3. forEach method using with 'this'

    // users.forEach(function(element, index) {
    //     this[index] = this[index].name;
    // }, users);
    // return users;

// 4. forEach method using with arrow function

    // users.forEach((element, index, theArr) => theArr[index] = theArr[index].name);
    // return users;

// 5. 'map' method using

  const modifyUsers = users.map(item => item.name);
  return modifyUsers;
}
