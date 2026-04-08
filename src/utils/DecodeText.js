import { decode as atob } from 'base-64';

export const getDecodeText = (text) => {
  if (!text || typeof text !== 'string') return '';

  try {
    const decoded = atob(text);

    return decoded.replace(/<[^>]+>/g, '');
  } catch (e) {
    console.log("DECODE ERROR:", e);
    return text;
  }
};