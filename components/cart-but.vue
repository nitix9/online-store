<template>
    <NuxtLink to="/cart">
            <button class="cart" id="cart">
            <img class="cart__image" src="../image/cart.png" alt="Cart" />
            <div class="cart__num" id="cart_num">{{getCountCart()}}</div>
        </button>
    </NuxtLink>
</template>
<script>
import { useCartStore } from "../store/index"
const cartStoreMain = useCartStore();
export default{
    methods:{
        getCountCart(){
            return cartStoreMain.cartCount
        },
    }
}
</script>