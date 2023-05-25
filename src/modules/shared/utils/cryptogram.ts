import crypto from 'crypto';

export const makeSalt = (size = 3) => {
  return crypto.randomBytes(size).toString('base64');
};

export const encryptPassword = (password: string, salt: string) => {
  if (!password || !salt) {
    return '';
  }
  // const buf = Buffer.from(salt, 'base64');
  return crypto.pbkdf2Sync(password, salt, 1000, 16, 'sha1').toString('base64');
};
