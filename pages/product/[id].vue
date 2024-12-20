<template>
<CartBut />
<div class="load" v-if="!current_data || !course_item"><p>Загрузка...</p></div>
<div class="container-item" v-else>
    <div class="content-container">
        <div class="item-pict" :style="`background:linear-gradient(45deg, rgba(0,0,0,0.1) 97%,rgba(0,0,0,0.1) 99%,rgba(0,0,0,0) 100%),url(${current_data.image});background-repeat: no-repeat;background-size: contain;background-position: center; `"></div>
        <div class="item-about">
          <div class="title-item"><h2>{{ current_data.title }}</h2></div>  
          <div class="category-item"><p>Категория: {{ current_data.category }}</p></div>
          <div class="item-desc"><p>{{ current_data.description }}</p></div>
          <div class="item-rating">
            <div class="count-rating"><p>{{ current_data.rating.count }} оценок</p></div>
            <div class="rate-rating"><img src="../../image/star_ngeuw8us7zuc.svg"><p> {{ current_data.rating.rate }}</p></div>
          </div>
          <div class="item-price"><p>{{Math.round((current_data.price * course_item)).toLocaleString('ru-RU') }} ₽</p></div>
          <div class="cart-button"><button v-if="!(getNowInCart(current_data))" @click="addToCart(current_data);isHiden=true">В корзину</button>
    <button v-else style="background-color:#679cff">В корзине</button>
    </div>
        </div>
    </div>
</div>
</template>
<style>
.cart-button button:active{background-color: #284f96;}
.item-about .item-price p{font-family: Inter;font-size: 1.125rem;font-weight: 700;color:#3077FB ;}
.container-item{display: flex;justify-content: center;padding-top: 40px;}
.item-about{max-width: 589px;padding-left: 50px;}
.item-rating{display: flex;}
.rate-rating{display: flex;}
.item-price{padding-top: 33px;padding-bottom: 25px;}
.rate-rating p{padding-top: 2px}
.rate-rating img {width: 18px;height: 18px;padding-left: 15px;}
.item-desc{padding-bottom: 29px;}
.category-item{padding-top: 14px;padding-bottom: 14px;}
.title-item h2{font-family: Inter;font-size: 1.25rem;font-weight: 700;}
.item-about p{font-family: Inter;font-weight: 400 ;}
.content-container{display: flex;}
.item-pict{min-width: 495px;width: 100%;border-radius: 20px;}
@media screen and (max-width:800px) {
    .content-container{flex-wrap: wrap;}
    .item-pict{min-height: 400px;min-width: 0;}
    .item-about{padding-left: 0;}
    
}
</style>
<script>
import { useCartStore } from "../store/index"
const cartStore = useCartStore();
export default{
    data (){
        return{
            current_data:null,
            course_item:null
        }
    },
    mounted(){
        this.getCurrentProduct();
        this.getCourse();
    },
    methods: {
        addToCart(product) {
            cartStore.addCart(product)
        },
        getNowInCart(product) {
            const x = cartStore.cart?.find(el =>el.item.id==product.id)
            if (x?.item?.id) {
                return true
            } else {
                return false
            }

        },
        getCurrentProduct() {
            fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                .then((res) => res.json())
                .then((json) => {
                    this.current_data = json;
                    console.log(this.current_data)
                });
        },
        getCourse(){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res)=>res.json())
            .then((json)=>{
                this.course_item=Math.round(json.Valute.USD.Value);
            });
        }
    }}
</script>