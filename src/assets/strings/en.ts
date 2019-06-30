export default {
  login: {
    title: 'Login',
    login: 'login',
    idPlaceholder: 'ID',
    passwordPlaceholder: 'Password',
  },
  todoApp: {
    title: 'TODO Application',
    name: 'TOP',
    newTodo: 'Add TODO',
    addTodo: '⇧',
    placeholder: 'Enter your TODO',
    fetchTodos: 'Fetch TODOs',
    login: 'login',
    logout: 'Logout',
    loginMessage: (userId: string) => `Login user: ${userId}`,
    dateMessage: 'Date',
  },
  footer: {
    twitter: {
      label: 'Twitter',
      url: 'https://twitter.com/diescake',
    },
    github: {
      label: 'GitHub',
      url: 'https://github.com/diescake/igata',
    },
  },
} as const
