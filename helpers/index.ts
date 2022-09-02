import { readFileSync } from 'fs';

export const getPrivateKey = () => readFileSync('private/keys/jwt.pem', 'utf8');
export const getPublicKey = () =>
  readFileSync('private/keys/jwt.pub.pem', 'utf8');
