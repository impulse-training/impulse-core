import { Timestamp } from '../utils/Timestamp';

export interface SpotifyAuthData {
  access_token: string;
  token_type: 'bearer';
  expires_in: number; // e.g. 3600
}

export type SpotifyCredentials = SpotifyAuthData & {
  expiresAt: Timestamp;
};
