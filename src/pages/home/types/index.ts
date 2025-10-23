export interface ILoginCredentials {
  email: string
  password: string
}

export interface IAccount {
  _id?: string
  name: string
  password: string
  email: string
  avatar?: string
}
