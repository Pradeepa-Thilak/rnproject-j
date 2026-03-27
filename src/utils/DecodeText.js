import { decode } from "base-64";

export const getDecodeText = (text) => {
    if (!text || typeof (text) !== 'string') return '';

    try {
        return decode(text);
    } catch (e){
        return text;
    }
}