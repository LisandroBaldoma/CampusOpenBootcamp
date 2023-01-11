import { ROLES } from "./roles.enum";

export class User {
    userName = '';
    emial = '';
    password = '';
    role = ROLES.USER

    constructor(userName, email, password, role){
        this.userName = userName;
        this.email= email;
        this.password = password;
        this.role = role
    }
}