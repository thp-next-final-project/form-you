export type UserRole = "user" | "professor" | "admin"
export type User = {
  email: string,
  password?: string,
  role: UserRole?
}