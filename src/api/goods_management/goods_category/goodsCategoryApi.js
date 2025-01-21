import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/goods_management/goods_category'
/*保存*/
export function save(data) {
    return ajaxJson(apiPrefix + "/save", data)
}
/*修改*/
export function update(data) {
    return ajaxJson(apiPrefix + "/update", data)
}
/*停用*/
export function deactivate(sid) {
    return ajaxPost(apiPrefix + "/deactivate", {cid:sid})
}
/*列表显示*/
export function queryPageByQo(data) {
    return ajaxJson(apiPrefix + "/queryPageByQo", data)
}

export function getNormalCategoryAll(){
    return ajaxGet(apiPrefix+"/normalCategoryAll")
}