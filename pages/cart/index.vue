<template>
    <div>
        <div class="title-cart"><h2>Корзина</h2></div>
        <div class="load" v-if="!arrCart || !course_cart">
            <p>Загрузка...</p>
        </div>
        <div v-else class="allcart-container">
            <div class="cartit-container">
                <CartCard v-for="item, index in arrCart" :arr-cart="item" :course-cart="course_cart"
                    v-bind:key="index" />
            </div>
            <div class='allinf-wrapper'>
            <div class="all-container">
                <div class="all-inf">
                    <div class="count-prod">
                        <div class="count-prod__title">
                            <p>Товары</p>
                        </div>
                        <div class="count-prod__count">
                            <p>{{getAllCount()}} шт.</p>
                        </div>
                    </div>
                    <div class="all-price">
                        <div class="all-price__title">
                            <p>Итого</p>
                        </div>
                        <div class="all-price__price">
                            <p>{{getAllPrice(arrCart).toLocaleString('ru-RU')}} ₽</p>
                        </div>
                    </div>
                </div>
                <div class="butt-buy"><button>Оформить</button></div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
.title-cart h2 {font-family: Inter;font-size: 2.25rem;font-weight:700;padding: 0;margin: 0;}
.title-cart {max-width: 980px;margin: 0 auto;padding:40px 0 15px 0;}
.all-inf{padding: 22px 29px 0 29px;}
.butt-buy{padding-bottom: 25px;padding-left:29px;padding-right: 29px;}
.butt-buy button{height: 40px;width: 100%;background-color: #3077FB;border: 0;border-radius: 5px;font-family: Inter;font-size: 1.5rem;font-weight: 400;color: white;}
.allcart-container{display: flex;margin: 0 auto;max-width: 1200px;justify-content: center;}
.count-prod__title{font-family: Inter;font-size: 1.5rem;color: white;font-weight: 400}
.all-price__title{font-family: Inter;font-size: 1.5rem;color: white;font-weight: 400}
.count-prod__count{font-family: Inter;font-size: 1.5rem;color: white;font-weight: 400;}
.all-price__price{font-family: Inter;font-size: 1.5rem;color: white;font-weight: 400;}
.all-price{display: flex; justify-content: space-between;padding-bottom: 17px;}
.count-prod{display: flex;justify-content: space-between;padding-bottom: 31px;}
.allinf-wrapper{padding-left: 30px;padding-top: 30px;padding-bottom: 30px;}
.all-container{
    display: flex;
    flex-direction: column;
    background-color: #7B9AFF;
    min-width: 340px;
    border-radius: 20px;
}
@media screen and (max-width:805px) {
    .allcart-container{flex-wrap: wrap;}
    .allinf-wrapper{padding-left: 0;}
    .cartit-container{width: 90%;}
}
@media screen and (max-width:485px) {
    .allinf-wrapper{width: 90%;}
    .all-container{min-width: 0;width: 100%;}
    .count-prod__title {font-size: 1.2rem;}
    .count-prod__count{font-size: 1.2rem;}
    .all-price__price{font-size: 1.2rem;}
    .all-price__title{font-size: 1.2rem;}
    .butt-buy button{font-size: 1.2rem;}
}
</style>
<script>
import { useCartStore } from "../../store/index"
const cartStoreCart = useCartStore();
export default {
    data(){
        return{
            arrCart:null,
            course_cart:null
        }
    },
    mounted(){
        cartStoreCart.initializeStore();
        this.arrCart=cartStoreCart.cart;
        this.getCourseCart();
        
    },
    methods:{
        getAllCount(){
            return cartStoreCart.cartCount;
        },
        getAllPrice(arr){
            return arr.reduce((sum, current) => sum + Math.round((current.item.price*this.course_cart)*current.quantity), 0);
        },
        getCourseCart(){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res)=>res.json())
            .then((json)=>{
                this.course_cart=Math.round(json.Valute.USD.Value);
            });
        }
    }
}
</script>