import actionType from '../actions/actionType'

const initState = {
    // currentCity: '深圳',
    checkedCity: '深圳市',
    checkedarea: '全部',
    hotCity: ['上海市', '宁波市', '青岛市', '金华市', '杭州市', '厦门市', '南京市', '深圳市', '广州市', '东莞市', '郑州市', '北京市'],
    foreignHotCity: ['洛杉矶', '伦敦', '休斯顿', '法兰克福', '米兰', '马德里', '曼城', '汉堡', '慕尼黑', '东京', '科隆', '悉尼'],
    area: [
        {
            name: '全部',
            citys: ['全部', '上海市', '宁波市', '青岛市', '金华市', '杭州市',
                '厦门市', '南京市', '深圳市', '广州市', '东莞市', '郑州市',
                '北京市', '洛杉矶', '伦敦', '休斯顿', '法兰克福', '米兰',
                '马德里', '曼城', '汉堡', '慕尼黑', '东京', '科隆', '悉尼']
        }, {
            name: '华东地区',
            citys: ['青岛市']
        }, {
            name: '华南地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '华中地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '华北地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '西北地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '西南地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '东北地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '港澳台地区',
            citys: ['上海市', '宁波市', '青岛市']
        }, {
            name: '海外地区',
            citys: ['上海市', '宁波市', '青岛市']
        }
    ],
    currentArea: {
        name: '全部',
        citys: ['全部', '上海市', '宁波市', '青岛市', '金华市', '杭州市',
            '厦门市', '南京市', '深圳市', '广州市', '东莞市', '郑州市',
            '北京市', '洛杉矶', '伦敦', '休斯顿', '法兰克福', '米兰',
            '马德里', '曼城', '汉堡', '慕尼黑', '东京', '科隆', '悉尼']
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.CITY_CHANGE:
            // 注意 这里直接赋值是只改变了数组的值 数组是引用类型 
            // 如果只改变了值没改变地址 react 认为这个数据没有改变 所以不会更新 ，所以这里要用深拷贝，即解构赋值
            state.checkedCity = action.payload.city
            return {...state}
        case actionType.AREA_CHANGE:
            state.currentArea = action.payload.area
            state.checkedarea = action.payload.area.name
            return {...state}
        default:
            return state
    }
}