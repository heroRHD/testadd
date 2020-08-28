import actionType from './actionType'

export const changecity = (city) => {
    console.log('改变了城市');
    return{
        type:actionType.CITY_CHANGE,
        payload:{
            city
        }
    }
}

export const changearea = (area) => {
    console.log('改变了地区');
    return{
        type:actionType.AREA_CHANGE,
        payload:{
            area
        }
    }
}