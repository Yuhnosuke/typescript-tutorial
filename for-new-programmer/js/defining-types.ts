interface User {
  name: string
  id: number
}

// const user: User = {
//   name: 'Jayes',
//   id: 0
// }

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount('Murphy', 1)

function getAdminUser(): User {
  return
}

function deleteUser(id: number) {
  return id
}
