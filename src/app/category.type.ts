export class Category {
    public mct_id: string;
    public mct_name: string;
    public mct_user: string;
    
    constructor(base?: any) {
        if (base !== undefined){
            this.mct_id = base.mct_id;
            this.mct_name = base.mct_name;
            this.mct_user = base.mct_user;
        }
    }
}