import axios from "./http";
let PATH = 'http://62.234.138.175:8000'
let LIANLONG = "lianlong";
let HAIDONG = "haidong";
let LONGMIN = "longmin";
export default {
    getDynamicWaterInfo() {
        //获取动态水质信息
        return axios.get(PATH + "/water/getDynamicWaterInfo", );
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
