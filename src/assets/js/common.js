/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-09-07 20:58:35
 */
import { getToken } from "@/assets/js/auth";
import axios from "axios";
import { Message } from "element-ui";
import Cookies from "js-cookie";
import qs from 'qs';
import saveAs  from 'file-saver';

// const prefix_url = "http://localhost:9291"
const prefix_url = "http://localhost:9291"

/*刷新Cooke的存活时间*/
function refreshCookies() {
    var token=getToken()
    if (token){
        //刷新cookie
        axios({
            url:prefix_url+"/checkedToken",
            method:"GET",
            params:{token:token}
        }).then(res=>{
            res=res.data
            console.log("getoken",res)
            if (res.code==200){
                console.log("getoken",res)
                Cookies.set("token", res.data.token, {expires: 12/24})
                Cookies.set("employee", JSON.stringify(res.data.employee), {expires: 12/24})
            }

        }).catch((e)=>{
            console.log(e)
        })
    }
    return token;

}

/*post请求*/
export function ajaxPost(url, param) {
    return axios({
        url: prefix_url + url,
        method: "POST",
        headers:{
            'token': refreshCookies() //设置token 其中K名要和后端协调好
        },
        data: qs.stringify(param)
    }).catch((e) => {
        
        console.log(e);
        if (
            e.response == undefined ||
            e.response.data == undefined
        ) {
            popup(e, "error")
        } else {
            popup(e.response.data, "error")
        }

    })
}

/*下载请求*/
export function downloadExcel(url, param) {
    return axios({
        url: prefix_url + url,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 确保发送的数据格式正确
            'token': refreshCookies() // 设置token，其中K名要和后端协调好
        },
        data: qs.stringify(param),
        responseType: 'blob' // 设置响应类型为blob以处理文件流
    }).then((response) => {
        // 创建一个Blob对象并使用file-saver保存文件
        const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); // Excel文件的MIME类型
        const contentDisposition = response.headers['content-disposition'];
        let filename = '角色信息.xlsx'; // 默认文件名
        if (contentDisposition) {
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(contentDisposition);
            if (matches != null && matches[1]) filename = matches[1];
        }
        saveAs(blob, filename); // 保存文件
    }).catch((e) => {
        console.log(e);
        if (e.response == undefined || e.response.data == undefined) {
            popup(e, "error");
        } else {
            popup(e.response.data, "error");
        }
    });
}

/*json请求*/
export function ajaxJson(url, param) {
    return axios({
        url: prefix_url + url,
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'token': refreshCookies() //设置token 其中K名要和后端协调好
        },
        data: param
    }).catch((e) => {
        console.log(e);
        if (
            e.response == undefined ||
            e.response.data == undefined
        ) {
            popup(e, "error")
        } else {
            popup(e.response.data, "error")
        }

    })
}

/*GET请求*/
export function ajaxGet(url, param) {
    return axios({
        url: prefix_url + url,
        method: "GET",
        headers: {
            'token': refreshCookies() //设置token 其中K名要和后端协调好
        },
        params:param
    }).catch((e) => {
        console.log(e);
        if (
            e.response == undefined ||
            e.response.data == undefined
        ) {
            popup(e, "error")
        } else {
            popup(e.response.data, "error")
        }

    })
}
/*给用户弹出相应的提示*/
export function popup(msg, type) {
    switch (type) {
        case "warning":
            Message.warning(msg);
            break;
        case "error":
            Message.error({message: msg, duration: 5000, showClose: true});
            break;
        case "info":
            Message.info(msg);
            break;
        default:
            Message.success(msg);
    }

}