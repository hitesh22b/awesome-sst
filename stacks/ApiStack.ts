import * as sst from "@serverless-stack/resources";
import {SharedVariables} from "./interface/shared-variables";

export default class ApiStack extends sst.Stack {
    // Public reference to the API
    api;

    constructor(scope: sst.App, id: string, props: SharedVariables) {
        super(scope, id, props);

        const { table } = props;

        // Create the API
        this.api = new sst.Api(this, "Api", {
            defaults: {
                function: {
                    environment: {
                        TABLE_NAME: table.tableName,
                    },
                }
            },
            routes: {
                "POST   /notes": "backend/functions/lambda.handler",
            },
        });

        // Allow the API to access the table
        this.api.attachPermissions([table]);

        // Show the API endpoint in the output
        this.addOutputs({
            ApiEndpoint: this.api.url,
        });
    }
}
