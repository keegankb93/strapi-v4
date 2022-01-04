module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8403fff4632bbe130a3d0486abb8c98'),
  },
});
