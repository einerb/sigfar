import { environment } from "../../environments/environment";

export const Endpoint = {
  AUTH: {
    LOGIN: environment.api.base + "auth/login",
    LOGOUT: environment.api.base + "logout"
  },
  ROLES: {
    BASE: environment.api.base + "roles"
  },
  PRODUCT: {
    BASE: environment.api.base + "products"
  },
  PERMISSION: {
    BASE: environment.api.base + "permissions",
    ACCEPT: environment.api.base + "permissions/accept"
  },
  SCHEDULE: {
    BASE: environment.api.base + "schedules"
  },
  INVENTORY: {
    BASE: environment.api.base + "inventories"
  },
  USER: {
    BASE: environment.api.base + "users",
    REGISTER: environment.api.base + "auth/signup"
  }
};
