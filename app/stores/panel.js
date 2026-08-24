import { ref} from 'vue'

export const userShoppingStore = defineStore('shopping',{
 state: () => ({
    sum : 0,
    
    shopArray : reactive([{name:'',price:0}]),
    
}),
    actions:{
        addShop(item){
            this.shopArray.push(item)
    console.log(this.shopArray);
              
        },
        removeshop(array,item){
            this.shopArray.splice(array,1)
            this.sum -= item.price
        },
        sumShop(item){
           this.sum += item
        }
    }
})