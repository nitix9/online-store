<template>
    <div class="cartit-cont">
    <div class="cartit-wrapper">
        <div class="pictcart-container">
        <div class="itcart-pict"
            :style="`background:linear-gradient(45deg, rgba(0,0,0,0.1) 97%,rgba(0,0,0,0.1) 99%,rgba(0,0,0,0) 100%),url(${arrCart.item.image});background-repeat: no-repeat;background-size: contain;background-position: center; `">
        </div></div>
        <div class="aboutit-cart">
            <div class="itcart-title">{{ arrCart.item.title }}</div>
            <div class="itprice">
                <p>{{ Math.round((+arrCart.item.price * courseCart)*arrCart.quantity).toLocaleString('ru-RU')}} ₽</p>
            </div>
        </div>
        <div class="butt-container">
        <div class="quantity-container"><button v-if="arrCart.quantity>1" @click="delOne(arrCart)">-</button> <button v-if="arrCart.quantity==1" style="background-color: #A6C5FF;">-</button><p>{{ arrCart.quantity }}</p> <button @click="addOne(arrCart)">+</button></div>
        <div class="del-container"><button @click="delCartItem(arrCart)">Удалить</button></div></div>
    </div>
</div>
</template>
<style>
.itprice{
    font-family: Inter;font-size: 1.125rem;font-weight: 700;color: white;
}
.cartit-cont{padding-top: 30px;}
.quantity-container button {width: 25px;height: 25px;background-color: #3077FB;border: 0;border-radius: 5px;font-family: Inter;font-size: 1rem;font-weight: 700;color: white;}
.quantity-container button:active{background-color: #284f96;}
.quantity-container{min-width: 127px;display: flex;justify-content: space-between;padding-bottom: 7px;}
.quantity-container p{font-family: Inter;font-size: 1rem; font-weight: 400;color: white;}
.del-container button:active{background-color: #C55454;}
.del-container button{width: 100%;min-width: 127px;background-color: #FF4E4E;font-size:1rem ;font-family: Inter;color: white;border:0;border-radius: 7px;}
.butt-container{width: 100%;display:flex;flex-direction: column;align-items: flex-end;padding:40px 40px 0 0;}
.aboutit-cart{padding-top: 17px;min-width: 120px;}
.itcart-title{padding-bottom: 16px;}
.pictcart-container{ padding: 10px 35px 10px 17px;    max-width: 75px;
    min-height: 112px;
    width: 100%;}
.quantity-container{display: flex;}
.cartit-wrapper{
    background-color: #7B9AFF;
    border-radius: 20px;
    display: flex;
    max-width: 829px;
}
.itcart-pict {
    max-width: 75px;
    min-height: 112px;
    width: 100%;
    border-radius: 20px;
}
.itcart-title{
    font-family: Inter;
    font-size: 1rem;
    font-weight: 700;
}
@media screen and (max-width:485px) {
    .cartit-cont{padding-top: 10px;}
    .aboutit-cart{min-width: 100px;}
    .cartit-wrapper{flex-wrap: wrap;}
    .butt-container{padding:0;align-items: center;}
    .aboutit-cart{width: 50%;}
    .del-container{padding-bottom: 10px;}
}
</style>
<script>
import { useCartStore } from "../store/index"
const cartStore = useCartStore();
export default{
    props:['arrCart','courseCart'],
    methods:{
        delCartItem(item){
            cartStore.deleteItem(item)
        },
        addOne(item){
            cartStore.addOneItem(item)
        },
        delOne(item){
            cartStore.delOneItem(item)
        }
    }
}
</script>