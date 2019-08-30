export class UserApi {
    public id: string;
    public name: string;
    public lastname: string;
    public email: string;
    public username: string;
    public password: string;
    public role: string;
    public phone: string;
    public address: string;
    public birthday: string;
    public state: boolean;
    public online: boolean;
    public date_created_At: Date;
    public date_updated_At: Date;

    public constructor(item?: UserApi) {
        this.id = item && item.id ? item.id : '';
        this.name = item && item.name ? item.name : '';
        this.lastname = item && item.lastname ? item.lastname : '';
        this.email = item && item.email ? item.email : '';
        this.username = item && item.username ? item.username : '';
        this.password = item && item.password ? item.password : '';
        this.role = item && item.role ? item.role : '';
        this.phone = item && item.phone ? item.phone : '';
        this.address = item && item.address ? item.address : '';
        this.birthday = item && item.birthday ? item.birthday : '';
        this.state = item && item.state ? item.state : true;
        this.online = item && item.online ? item.online : false;
        this.date_created_At = item && item.date_created_At ? new Date(item.date_created_At) : new Date();
        this.date_updated_At = item && item.date_updated_At ? new Date(item.date_updated_At) : new Date();
    }
}
