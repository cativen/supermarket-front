import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/inventory_management/store/storage_situation'
export function queryPageByQo(data) {
    return ajaxJson(apiPrefix + "/queryPageByQo", data)
}

export function queryStoreGoodsByStoreId(data) {
    return ajaxJson(apiPrefix + "/queryStoreGoodsByStoreId", data)
}