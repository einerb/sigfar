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
    ACCEPTDENY: environment.api.base + "permissions/acceptDeny",
    DENY: environment.api.base + "permissions/destroy",
    BYUSER: environment.api.base + "permissions/byUser"
  },
  SCHEDULE: {
    BASE: environment.api.base + "schedules",
    BYUSER: environment.api.base + "schedules/byUser"
  },
  INVENTORY: {
    BASE: environment.api.base + "inventories"
  },
  USER: {
    BASE: environment.api.base + "users",
    REGISTER: environment.api.base + "auth/signup",
    BYUSER: environment.api.base + "users/byuser"
  }
};
