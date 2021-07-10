import axios from "axios";
import qs from "query-string";
import { join } from "path";

const baseURL = "http://localhost:8080";

const api = axios.create({
    baseURL: baseURL + '/api',
});

/**
 * Fetches the list of tags
 * @returns {Promise<{
 *  tag: string;
 *  thumbnail: {
 *      path: string;
 *      type: 'video'|'image'|'unknown';
 *  };
 * }[]>}
 */
export const getTags = () => api.get('/tags').then(d => d.data);

/**
 * Fetches the files belonging to a tag
 * @param {string} tag The tag name
 * @returns {Promise<{
 *  path: string;
 *  type: 'video'|'image'|'unknown';
 *  mtime: string;
 *  tags: string[];
 *  id: number;
 *  thumbs: {
 *      path: string;
 *      type: 'video'|'image'|'unknown';
 *  }[];
 * }[]>}
 */
export const getTag = (tag) => api.get('/tag?' + qs.stringify({ tag })).then(d => d.data);

export const thumbUrl = (path) => baseURL + join('/thumbs', path);