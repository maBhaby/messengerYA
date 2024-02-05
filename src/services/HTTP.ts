import { API_PATH, METHODS } from "@/consts";

type MethodTypes = (typeof METHODS)[keyof typeof METHODS];

type IOptionsRequest = {
  data?: string;
  method?: MethodTypes;
  timeout?: number;
  headers?: Record<string, string>;
  params?: object;
};

interface CustomXMLHttpRequest<Response = any> extends XMLHttpRequest {
  response: Response;
}

type HTTPMethod<T = any> = (
  url: string,
  options?: IOptionsRequest
) => Promise<CustomXMLHttpRequest<T>>;

/**
 *  Get string of query params from object params
 * @param data
 */
const queryStringify = (data: object | string) => {
  if (typeof data === "string") {
    return data;
  }

  let result = "?";
  result += Object.entries(data)
    .map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(",") : String(value)}`)
    .join("&");
  return result;
};

class HTTP {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
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

  request = (
    url: string,
    options: IOptionsRequest = { method: METHODS.GET },
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, headers = {}, data = "" } = options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error("no method"));
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.withCredentials = true;

      const isGet = method === METHODS.GET;
      const path =
        isGet && !!data ? `${this.baseUrl}${url}${queryStringify(data)}` : `${this.baseUrl}${url}`;

      xhr.open(method, path);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTP;

export const HTTPInstance = new HTTP(API_PATH);
