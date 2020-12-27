import {reqSearch} from '@/api'
const state = {
    productList:{}
}
const mutations = {
    RECIVE_PRODUCTLIST(state,productList){
        state.productList = productList
    }
}
const actions = {
    async getProductList({commit},searchParams){
      const result = await reqSearch(searchParams)
      if(result.code === 200){
          const productList = result.data
          commit('RECIVE_PRODUCTLIST',productList)
      }
    }
    
}
const getters = {
    goodsList(state){
        return state.productList.goodsList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}