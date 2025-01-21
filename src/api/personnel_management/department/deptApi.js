import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/personnel_management/dept'

//获取仓库信息
export function listByQo(data) {
    return ajaxGet(apiPrefix + "/list", data)
}
/*保存*/
export function save(data) {
    return ajaxJson(apiPrefix + "/save", data)
}
/*修改*/
export function update(data) {
    return ajaxJson(apiPrefix + "/update", data)
}
/*停用*/
export function deactivate(id) {
    return ajaxJson(apiPrefix + "/deactivate", {id:id})
}
