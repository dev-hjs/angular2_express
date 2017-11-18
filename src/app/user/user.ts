export class User {
    userNo: number;
    userId: string;
    userName: string;
    userPwd : string;
    complete: boolean;
    token:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}