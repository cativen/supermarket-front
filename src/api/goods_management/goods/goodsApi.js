import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/goods_management/goods'

/*列表显示*/
export function queryPageByQo(data) {
    return ajaxJson(apiPrefix + "/queryPageByQo", data)
}
/*保存*/
export function save(data) {
    return ajaxJson(apiPrefix + "/save", data)
}
/*上/下架业务*/
export function upOrdown(data) {
    return ajaxPost(apiPrefix + "/upOrdown", data)
}
//修改
export function update(data) {
    return ajaxJson(apiPrefix + "/update", data)
}
/*查询商品信息*/
export function queryGoodsById(data) {
    return ajaxGet(apiPrefix + "/queryGoodsById", data)
}

//去支付商品
export function gopayById(data) {
    return ajaxPost(apiPrefix + "/gopayById", data)
}

export function selected_goodsAll() {
    return ajaxGet(apiPrefix + "/selected_goodsAll", {})
}

export function selected_storeAll() {
    return ajaxGet(apiPrefix + "/selected_storeAll", {})
}

export function returnGoods(data) {
    return ajaxPost(apiPrefix + "/returnGoods", data)
}