interface User {
  name: string,
  id: number
}

const user: User = {
  name: "nash",
  id: 0
};

const showProfile = (user: User) => {
  console.log(user.name);
  console.log(user.id);
}

showProfile(user);
