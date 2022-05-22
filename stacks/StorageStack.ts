import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
    // Public reference to the table
    table;
    bucket;

    constructor(scope: sst.App, id: string, props?: sst.StackProps) {
        super(scope, id, props);

        // Create the DynamoDB table
        this.table = new sst.Table(this, "Notes", {
            fields: {
                userId: 'string',
                noteId: 'string',
            },
            primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
        });
        this.bucket = new sst.Bucket(this, "Uploads");
    }
}
