import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: [],
            cartCount: 0,
        }
    },
    actions:{
        addCart(item) {
            this.cart.push({item,quantity:1})
            this.cartCount++;
            this.saveCart();
            },
        deleteItem(item) {
            let indItem=this.cart.indexOf(item);
            this.cartCount=this.cartCount-this.cart[indItem].quantity;
            this.cart.splice(indItem,1)
            this.saveCart();
        },
        addOneItem (item){
            let indItem=this.cart.indexOf(item);
            this.cart[indItem].quantity++;
            this.cartCount++;
            this.saveCart();
        },
        delOneItem (item){
            let indItem=this.cart.indexOf(item);
            this.cart[indItem].quantity--;
            this.cartCount--;
            this.saveCart();
        },
        saveCart() { localStorage.setItem('cart', JSON.stringify(this.cart)); localStorage.setItem('cartCount', this.cartCount); },
        initializeStore() {
            try {
            this.cart = JSON.parse(localStorage.getItem('cart'))? JSON.parse(localStorage.getItem('cart')):[]
            this.cartCount = parseInt(localStorage.getItem('cartCount'))? parseInt(localStorage.getItem('cartCount')):0
            
            } catch {
            localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            }
    }
})