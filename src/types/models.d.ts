export type UserRole = "user" | "professor" | "admin"

export type User = {
  email: string,
  password?: string,
  role: UserRole?
}

export interface CurrentUser {
  id: number?,
  email: string?,
  role: UserRole?,
  isLogged: boolean
}

export type Payload = {
  type, 
  id, 
  email, 
  isLogged,
  data,
  token
}

export type Headers = {
  'Content-Type': 'application/json',
  Authorization: string?
}

export type Params = {
  method: 'get' | 'post' | 'delete',
  headers: Headers,
  body: string
}