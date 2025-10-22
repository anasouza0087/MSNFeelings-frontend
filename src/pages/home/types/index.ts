export interface ILoginCredentials {
  email: string
  password: string
}

export interface IAccount {
  _id?: string
  name: string
  nickname: string | number
  password: string
  email: string
  avatar?: string
}
