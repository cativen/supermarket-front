import {ajaxJson, ajaxPost} from "@/assets/js/common";

const menuApiPrefix = '/system/menu'

//条件分页获取菜单的信息
export function queryPageByQo(data) {
    return ajaxJson(menuApiPrefix + "/queryPageByQo", data)
}
