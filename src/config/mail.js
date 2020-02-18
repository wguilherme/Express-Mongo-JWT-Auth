export default {
    host: process.env.HOST,
  port: 2525,
  secure: false, //mailtrap does not require
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASSWORD,
  },
  default: {
      from: process.env.FROM, //from default
  }
}
