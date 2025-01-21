import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const storeApiPrefix = '/inventory_management/store'

//获取仓库信息
export function storeList(data) {
    return ajaxJson(storeApiPrefix + "/list", data)
}
/*保存*/
export function save(data) {
    return ajaxJson(storeApiPrefix + "/save", data)
}
/*修改*/
export function update(data) {
    return ajaxJson(storeApiPrefix + "/update", data)
}
/*停用*/
export function deactivate(sid) {
    return ajaxPost(storeApiPrefix + "/deactivate", {sid:sid})
}

