export interface ICreateUserDto{
    name: string;
    email: string;
    password: string;
    driver_licenses: string;
    isAdmin?: boolean;
}