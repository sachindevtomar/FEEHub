export class User{
    
    id: number;
    name: string;
    role: string;
    username: string;
    password: string;
    claims: string[];

    constructor(id:number,name: string, role: string, username: string, password: string, claims:string[]) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.username = username;
        this.password = password;
        this.claims = claims;
      }

}