import axios from "./http";
let PATH = '62.234.138.175'
let LIANLONG = "lianlong";
let HAIDONG = "haidong";
let LONGMIN = "longmin";
export default {
    login(params) {
        //login登录
        return axios.post(PATH + "/ctl/user/login", params);
    },
    logout() {
        //退出登录
        return axios.get(PATH + "/ctl/user/logout");
    },
    getVisitorRecord() {
        //获取访客记录
        return axios.get(PATH + "/ctl/user/getLoginCount");
    },
   
};
