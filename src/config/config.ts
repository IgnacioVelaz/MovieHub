import dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.producton" });
} else {
  dotenv.config({ path: ".env.development" });
}

type ConfigType = {
  [key: string]: EnvironmentConfig;
};
type EnvironmentConfig = {
  app: AppConfig;
  db: DbConfig;
  auth0: Auth0Config;
};
type AppConfig = {
  PORT: string | number;
};
type DbConfig = {
  URI: string;
};

type Auth0Config = {
  client_origin: string;
  audience: string;
  issuer: string;
};

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: ConfigType = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    db: {
      URI: process.env.URI || "mongodb:/localhost:27017",
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN || "http://localhost:5173",
      audience: process.env.AUTH0_AUDIENCE || "http://localhost:8081",
      issuer: process.env.AUTH0_ISSUER || "",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 4002,
    },
    db: {
      URI: process.env.URI || "mongodb:/localhost:27017",
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN || "http://localhost:5173",
      audience: process.env.AUTH0_AUDIENCE || "http://localhost:8081",
      issuer: process.env.AUTH0_ISSUER || "",
    },
  },
};

export default CONFIG[ENV];
