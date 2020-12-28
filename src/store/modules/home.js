import {
    reqCategoryList,
    reqBannerList,
    reqFloors,
    reqRecommends,
    reqLike,
    reqRank
} from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorsList: [],
    recommendsList: [],
    likeList:[],
    rankList:[]
}
const mutations = {
    //首页三级列表
    RECIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0, 15)
    },
    //轮播图
    RECIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    //楼层
    RECIVE_FLOORS_LIST(state, floorsList) {
        state.floorsList = floorsList
    },
    //今日推荐
    RECIVE_RECOMMENDS_LIST(state, recommendsList) {
        state.recommendsList = recommendsList
    },
    //猜你喜欢
    RECIVE_LICK_LIST(state, likeList) {
        state.likeList = likeList
    },
    //Rank
    RECIVE_RANK_LIST(state, rankList) {
        state.rankList = rankList
    }
}
const actions = {
    //首页三级列表
    async getCategoryList({
        commit
    }) {
        const result = await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data
            commit('RECIVE_CATEGORY_LIST', categoryList)
        }
    },
    //轮播图
    async getBannerList({
        commit
    }) {
        const result = await reqBannerList()
        if (result.code === 200) {
            const bannerList = result.data
            commit('RECIVE_BANNER_LIST', bannerList)
        }
    },
    //今日推荐
    async getRecommends({
        commit
    }) {
        const result = await reqRecommends()
        if (result.code === 200) {
            const recommendsList = result.data
            commit('RECIVE_RECOMMENDS_LIST', recommendsList)
        }
    },
    //楼层Floors
    async getFloors({
        commit
    }) {
        const result = await reqFloors()
        if (result.code === 200) {
            const floorsList = result.data
            commit('RECIVE_FLOORS_LIST', floorsList)
        }
    },
    //猜你喜欢
    async getLike({
        commit
    }) {
        const result = await reqLike()
        if (result.code === 200) {
            const likeList = result.data
            commit('RECIVE_LICK_LIST', likeList)
        }
    },
    //Rank
    async getRank({
        commit
    }) {
        const result = await reqRank()
        if (result.code === 200) {
            const rankList = result.data
            commit('RECIVE_RANK_LIST', rankList)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}