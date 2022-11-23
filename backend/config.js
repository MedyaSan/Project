export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://admin:1234@cluster0.hlhb2lv.mongodb.net/test",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
