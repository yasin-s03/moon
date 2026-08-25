import { ref} from 'vue'

export const userShoppingStore = defineStore('shopping',{
 state: () => ({
    sum : ref(0),
    shopArray : reactive([]),
}),
    actions:{
        addShop(item){
            this.shopArray.push(item)
        },
        removeshop(array,item){
            this.shopArray.splice(array,1)
            this.sum -= item.price
        },
        sumShop(item){
           this.sum += item
        },
    }
})