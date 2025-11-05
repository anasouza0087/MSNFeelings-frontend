// export interface IChatroom {
//   user: {
//     id: string
//     name: string
//     avatar?: string
//   }
//   message?: string
// }

export interface IChatroom {
  participants: {
    id: string
    name: string
    avatar?: string
  }[]
  message?: string
}
