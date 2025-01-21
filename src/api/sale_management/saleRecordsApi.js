import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/sale_management/sale_record'
/*得到订单号*/
export function getCn() {
    return ajaxGet(apiPrefix + "/getCn", {})
}

export function getOptionSaleRecordsGoods() {
    return ajaxGet(apiPrefix + "/getOptionSaleRecordsGoods", {})
}

export function saveSaleRecords(data) {
    return ajaxGet(apiPrefix + "/saveSaleRecords", data)
}

export function paySaleItems(data) {
    return ajaxJson(apiPrefix + "/pay", data)
}

export function queryPageByQoSaleRecords(data) {
    return ajaxJson(apiPrefix + "/queryPageByQoSaleRecords", data)
}

export function delSaleRecords(data) {
    return ajaxGet(apiPrefix + "/delSaleRecords", data)
}
