import { environment } from "../../environments/environment";

export const Endpoint = {
  AUTH: {
    BASE: environment.api.base + "auth",
    LOGIN: environment.api.base + "auth/login",
    LOGOUT: environment.api.base + "auth/logout"
  },
  ROLES: {
    BASE: environment.api.base + "auth/roles"
  },
  PRODUCT: {
    BASE: environment.api.base + "auth/products"
  },
  PERMISSION: {
    BASE: environment.api.base + "auth/permissions"
  },
  SCHEDULE: {
    BASE: environment.api.base + "auth/schedules"
  },
  INVENTORY: {
    BASE: environment.api.base + "auth/inventories"
  },
  USER: {
    BASE: environment.api.base + "auth/users"
  }
};
