import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/inventory_management/supplier'

//获取供货商信息
export function queryPageSupplier(data) {
    return ajaxJson(apiPrefix + "/queryPageByQo", data)
}
export function saveSupplier(data) {
    return ajaxJson(apiPrefix + "/save", data)
}

export function updateSupplier(data) {
    return ajaxJson(apiPrefix + "/update", data)
}

export function queryByCn(data) {
    return ajaxGet(apiPrefix + "/queryByCn", data)
}

export function delSupplier(data) {
    return ajaxPost(apiPrefix + "/deactivate", data)
}
