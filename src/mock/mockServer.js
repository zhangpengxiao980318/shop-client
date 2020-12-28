import Mock from 'mockjs'
import floors from './floor.json'
import recommends from './recommends.json'
import like from './like.json'
import rank from './rank.json'
//提供楼层的接口
Mock.mock('/mock/floors',{code:200,data:floors})
//提供今日推荐的接口
Mock.mock('/mock/recommends',{code:200,data:recommends})
//提供猜你喜欢的接口
Mock.mock('/mock/like',{code:200,data:like})
//提供Rank的接口
Mock.mock('/mock/rank',{code:200,data:rank})