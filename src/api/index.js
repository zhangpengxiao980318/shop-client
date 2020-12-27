/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象
*/
import ajax from './ajax'
import mockAjax from './mockAjax'
//首页三级分类
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })
}
//获取轮播图
export const reqBannerList = () => ajax('/cms/banner')
//mock floors和recommends
export const reqFloors = () => mockAjax('/floors')
export const reqRecommends = () => mockAjax('/recommends')
//搜索商品
export const reqSearch = (searchParams) => ajax.post('/list',searchParams)