export interface IUpdateUserDto{
    id?: string
    name?: string;
    email?: string;
    password?: string;
    driver_licenses?: string;
    avatar_file?: string;
    isAdmin?: boolean;
}