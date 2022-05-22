import * as sst from "@serverless-stack/resources";
export interface SharedVariables extends sst.StackProps {
    table: sst.Table;
}
