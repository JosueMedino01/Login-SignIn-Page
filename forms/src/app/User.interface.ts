export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ApiResponse {
  users: User[];
}
