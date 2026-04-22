import { decode } from 'html-entities';

export const getDecodeText = (text) => {
  // Handle invalid input
  if (!text || typeof text !== 'string') return '';

  try {
    // Decode HTML entities (e.g., &amp;, &#39;, etc.)
    const decoded = decode(text);

    // Remove HTML tags if present
    return decoded.replace(/<[^>]+>/g, '');
  } catch (e) {
    console.log('DECODE ERROR:', e);
    return text;
  }
};
