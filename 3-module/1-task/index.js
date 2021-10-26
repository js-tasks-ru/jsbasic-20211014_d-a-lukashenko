function namify(users) {
  for (let i = 0; i < users.length; i++) {
    users[i] = users[i].name;
  }
  return users;
}
