export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  type: string;
  secretToken?: string;
}