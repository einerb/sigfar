var MemberApi = /** @class */ (function () {
    function MemberApi(item) {
        this.id = item && item.id ? item.id : '';
        this.id_type = item && item.id_type ? item.id_type : null;
        this.dni = item && item.dni ? item.dni : null;
        this.name = item && item.name ? item.name : '';
        this.lastname = item && item.lastname ? item.lastname : '';
        this.gender = item && item.gender ? item.gender : null;
        this.birthday = item && item.birthday ? item.birthday : '';
        this.email = item && item.email ? item.email : '';
        this.address = item && item.address ? item.address : '';
        this.phone = item && item.phone ? item.phone : '';
        this.contact = item && item.contact ? item.contact : '';
        this.birthplace = item && item.birthplace ? item.birthplace : '';
        this.marital_status = item && item.marital_status ? item.marital_status : null;
        this.children = item && item.children ? item.children : false;
        this.number_children = item && item.number_children ? item.number_children : null;
        this.baptism_date = item && item.baptism_date ? item.baptism_date : '';
        this.place_baptism = item && item.place_baptism ? item.place_baptism : '';
        this.state = item && item.state ? item.state : true;
        this.date_created_At = item && item.date_created_At ? new Date(item.date_created_At) : new Date();
        this.date_updated_At = item && item.date_updated_At ? new Date(item.date_updated_At) : new Date();
    }
    return MemberApi;
}());
export { MemberApi };
//# sourceMappingURL=member.model.js.map