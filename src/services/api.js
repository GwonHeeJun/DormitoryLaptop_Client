import axios from "axios";

class Api {
  static defaultHeaderOptions = {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json"
  };

  static async ajax(method, apiUrl, url, data, options) {
    const _options = options
    ? { ...this.defaultHeaderOptions, ...options }
    : this.defaultHeaderOptions;

    console.log(typeof method);
    
    if (method === "get") {
      const axiosResult = !data
        ? await axios.get(`${apiUrl}${url}`, _options)
        : await axios.get(`${apiUrl}${url}`, data);

      return axiosResult;
    } else if (method === "post") {
      const axiosResult = !data
        ? await axios.post(`${apiUrl}${url}`, _options)
        : await axios.post(`${apiUrl}${url}`, data, _options);

      return axiosResult;
    } else if (method === "put") {
      const axiosResult = !data
        ? await axios.put(`${apiUrl}${url}`, _options)
        : await axios.put(`${apiUrl}${url}`, data, _options);

      return axiosResult;
    } else if (method === "delete") {
      const axiosResult = !data
        ? await axios.delete(`${apiUrl}${url}`, _options)
        : await axios.delete(`${apiUrl}${url}`, data, _options);

      return axiosResult;
    }
  }
}

export default Api