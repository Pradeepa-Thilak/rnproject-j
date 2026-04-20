import base64 from 'react-native-base64';
import { decode } from 'html-entities';

export const getDecodeText = (text) => {
  if (!text || typeof text !== 'string') return '';

  try {
    let decoded = text;

    // Base64 decode (safe)
    try {
      decoded = base64.decode(text);
    } catch {}

    decoded = decode(decoded);

    // Remove HTML tags
    return decoded.replace(/<[^>]+>/g, '');
  } catch (e) {
    console.log('DECODE ERROR:', e);
    return text;
  }
};
