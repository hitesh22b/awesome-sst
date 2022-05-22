import StorageStack from "./StorageStack";
import * as sst from "@serverless-stack/resources";
import ApiStack from "./ApiStack";

export default function main(app: sst.App) {
  const storageStack = new StorageStack(app, "storage");

  new ApiStack(app, "api", {
    table: storageStack.table,
  });
}
