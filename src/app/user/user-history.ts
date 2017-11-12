export class UserHistory {
    userNo: number;
    userData: string;
    
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}