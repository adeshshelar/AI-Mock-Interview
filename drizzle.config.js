/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:Qpu1OiyUBoC8@ep-fragrant-glade-a5clvvty.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };