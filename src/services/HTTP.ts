import { METHODS } from '@/consts';

type MethodTypes = (typeof METHODS)[keyof typeof METHODS];

type IOptionsRequest = {
  data?: string;
  method?: MethodTypes;
  timeout?: number;
  headers?: Record<string, string>;
  params?: object;
};

type HTTPMethod = (url: string, options?: IOptionsRequest) => Promise<unknown>;

/**
 *  Get string of query params from object params
 * @param data
 */
const queryStringify = (data: object) => {
  let result = '?';
  result += Object.entries(data)
    .map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(',') : String(value)}`)
    .join('&');
  return result;
};

class HTTP {

  private baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
  }

  get: HTTPMethod = (url, options = {}) =>
    this.request(
      url,
      {
        ...options,
        data: queryStringify(options.params || {}),
        method: METHODS.GET,
      },
      options.timeout
    );

  put: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: IOptionsRequest = { method: METHODS.GET }, timeout = 5000) => {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = timeout;
      const isGet = method === METHODS.GET;
      xhr.open(method || METHODS.GET, isGet ? `${this.baseUrl}${url}${data}` : `${this.baseUrl}${url}`);

      if (headers) {
        Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]));
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTP;

export const HTTPInstance = new HTTP('https://ya-praktikum.tech/api/v2')
