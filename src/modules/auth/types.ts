export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type FormField = Readonly<{
  [key: string]: string;
}>;

export type AuthorizedUser = Readonly<{
  image: string;
  username: string;
  bio: string;
  email: string;
  token: string | null;
  id: number | null;
  createdAt: string;
  updatedAt: string;
}>;

export type UserResponse = Readonly<{
  user: AuthorizedUser;
}>;

export type Token = AuthorizedUser['token'];
