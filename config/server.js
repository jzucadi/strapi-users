module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: 'http://localhost:1337',
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '06b9bb0c63ff38f2604412d8817f04a1'),
    },
  },
});
