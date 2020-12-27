import Mock from 'mockjs'
import floors from './floor.json'
import recommends from './recommends.json'
//提供楼层的接口
Mock.mock('/mock/floors',{code:200,data:floors})
//提供今日推荐的接口
Mock.mock('/mock/recommends',{code:200,data:recommends})