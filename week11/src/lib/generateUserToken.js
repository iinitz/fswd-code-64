import jsonwebtoken from 'jsonwebtoken'

export const generateUserToken = (user) => jsonwebtoken.sign(
  {
    userId: user._id,
  }, // payload
  process.env.JWT_SECRET, // secret
  {
    algorithm: 'HS256',
    expiresIn: '1d',
  }, // options
)
