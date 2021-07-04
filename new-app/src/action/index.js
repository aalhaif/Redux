export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
export const log = () => {
    return {
        type: "LOG"
    }
}
export const contactAdded =(arg)=>{
    return{
        type: "contactAdded",
        payload: arg,
    }
}