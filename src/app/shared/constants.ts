import { environment } from "../../environments/environment";
import { Endpoint } from "./endpoints";

export class Constant {
  public static PRODUCTION: boolean = environment.production;
  public static DEBUG = false;
  public static Endpoints = Endpoint;

  // Authentication
  public static AUTH = {
    getToken: () => {
      return localStorage.getItem("token");
    },
    getUser: () => {
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

  // Views
  public static VIEWS = {
    LOGIN: {
      base: ""
    },
    HOME: {
      base: "home"
    }
  };
}
