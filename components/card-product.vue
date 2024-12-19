<template>
<div class="card-wrapper">
    <NuxtLink :to="`/product/${productsData.id}`"><div class="pict-card" :style="`background:linear-gradient(45deg, rgba(0,0,0,0.1) 97%,rgba(0,0,0,0.1) 99%,rgba(0,0,0,0) 100%),url(${productsData.image});background-repeat: no-repeat;background-size: contain;background-position: center; `"></div>
    <div class="price-card"><p>{{ Math.round((productsData.price * course)).toLocaleString('ru-RU')}} ₽</p></div>
    <div class="name-card"><p>{{ productsData.title }} / {{ productsData.category }}</p></div>
    <div class="evaluation-card"><img src="../image/star_ngeuw8us7zuc.svg"><p>{{productsData.rating.rate}}</p></div></NuxtLink>
    <div class="cart-button"><button>В корзину</button></div>
</div>
</template>
<style>
@font-face {
    font-family: Inter;
    src: url("../fonts/Inter_18pt-Regular.ttf");
    font-weight: 400;
}
@font-face {
    font-family: Inter;
    src: url("../fonts/Inter_28pt-Bold.ttf");
    font-weight: 700;
}
a{text-decoration: none;}
p{padding: 0;margin: 0;}
.card-wrapper{    max-width: 280px;padding: 15px 10px 15px 10px;display: flex;flex-direction: column;}
.pict-card {min-height: 300px; background: linear-gradient(45deg, rgba(0,0,0,0.1) 97%,rgba(0,0,0,0.1) 99%,rgba(0,0,0,0) 100%),url("../image/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg");background-repeat: no-repeat;max-width: 280px;
background-size: contain;background-position: center;border-radius: 20px;}
.evaluation-card img {width: 18px;height: 18px;}
.evaluation-card{display: flex;}
.price-card{padding-bottom: 7px;padding-top: 10px;}
.price-card p{font-family: Inter;font-size: 1.125rem;font-weight: 700;color:#3077FB ;}
.evaluation-card p {padding-top: 2px;font-family: Inter;font-size: 1rem;font-weight: 400;padding-left: 5px;}
.name-card{font-family: Inter;font-size: 1.125rem;font-weight: 400;padding-bottom: 7px;}
.cart-button button{background-color:#3077FB ;width: 100%;padding:7px 0 7px 0;color: white;font-size: 1.125rem;font-family: Inter;font-weight: 400;border-radius: 10px;border: 0;  height: 40px;}
.cart-button{padding-top:5px ;display: flex; justify-content: center;flex-grow: 1;align-items: flex-end;}
</style>
<script>
export default{
    props:["productsData","course"],
}
</script>