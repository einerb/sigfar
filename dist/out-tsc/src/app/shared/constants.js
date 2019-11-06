import { environment } from "../../environments/environment";
import { Endpoint } from "./endpoints";
var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant.PRODUCTION = environment.production;
    Constant.DEBUG = false;
    Constant.Endpoints = Endpoint;
    // Authentication
    Constant.AUTH = {
        getToken: function () {
            return localStorage.getItem("token");
        },
        getUser: function () {
            return JSON.parse(localStorage.getItem("user"));
        },
        CLIENT_ID: "3",
        CLIENT_SECRET: "g3MPIf6ue6HAOi5CuA6H",
        KEYS: {
            token: "token",
            userData: "user",
            urlBeforExpelling: "urlBeforExpelling"
        }
    };
    Constant.images = {
        logo: ""
    };
    // Views
    Constant.VIEWS = {
        LOGIN: {
            base: ""
        },
        HOME: {
            base: "home"
        }
    };
    return Constant;
}());
export { Constant };
//# sourceMappingURL=constants.js.map