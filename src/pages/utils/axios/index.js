import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, { param: "callback" }, function(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  static ajax(options) {
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseUrl: options.baseUrl,
        params: options.data
      }).then(resposne => {
        if (resposne.status == "200") {
          let res = resposne.data;
          resolve(res);
        } else {
          reject(resposne.data);
        }
      });
    });
  }
}
