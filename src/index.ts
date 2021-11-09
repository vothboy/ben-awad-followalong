import { MikroORM } from "@mikro-orm/core";

const main = () => {
  const orm = MikroORM.init({
    dbName: "",
  });

  console.log("Hello There!!!");
};
