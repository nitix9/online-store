<template>
    <div>
        <div class="sort-title"><h2>Категории</h2></div>
    <div class="sort-cont">
        <div class="button-wrapper"><button @click="if (url=='https://fakestoreapi.com/products'){} else{url='https://fakestoreapi.com/products';products_data=null;getProducts()}">Все</button></div>
            <div class="button-wrapper"><button @click="if (url=='https://fakestoreapi.com/products/category/electronics'){} else{url='https://fakestoreapi.com/products/category/electronics';products_data=null;getProducts()}">Электроника</button></div>
            <div class="button-wrapper"><button @click="if (url=='https://fakestoreapi.com/products/category/jewelery'){} else{url='https://fakestoreapi.com/products/category/jewelery';products_data=null;getProducts()}">Ювелирные изделия</button></div>
            <div class="button-wrapper"><button @click="if (url=='https://fakestoreapi.com/products/category/men\'s clothing'){} else{url='https://fakestoreapi.com/products/category/men\'s clothing';products_data=null;getProducts()}">Мужская одежда</button></div>
            <div class="button-wrapper"><button @click="if (url=='https://fakestoreapi.com/products/category/women\'s clothing'){} else{url='https://fakestoreapi.com/products/category/women\'s clothing';products_data=null;getProducts()}">Женская одежда</button></div>
        </div>
<div class="load" v-if="!products_data || !course"><p>Загрузка...</p></div>
<div v-else>
        <div class="container">
        <div class="card-container" >
            <CardProduct v-for="item, index of products_data" :products-data="item" :course="course" v-bind:key="item.id"/>
        </div>
        </div>
        </div>
    </div>
</template>
<style>
.button-wrapper{padding-left: 10px;}
.button-wrapper button:active{background-color: #284f96;}
.button-wrapper button {font-family: Inter;padding-top:5px ;padding-bottom: 5px;font-size: 1.125rem;color: white;background-color: #3077FB;border-radius: 5px;border:0}
.sort-title h2 {font-family: Inter;font-weight: 400;font-size: 2rem;}
.sort-title {display: flex;justify-content: flex-end;max-width: 880px;margin: 0 auto;}
.sort-cont{display: flex;justify-content: flex-end;max-width: 880px;margin: 0 auto;}
.container{display: flex;justify-content: center;}
.card-container {display: flex;justify-content:flex-start;max-width: 927.5px;flex-wrap: wrap;}
.load{text-align: center;font-family: Inter;font-size: 2.5rem;font-weight: 700;color: #3077FB;padding-top: 50px;}
</style>
<script>
export default{
    data(){
        return{
            products_data:null,
            course:null,
            url:'https://fakestoreapi.com/products'
        }
    },
    mounted(){
        this.getProducts();
        this.getCourse();
    },
    methods: {
        getProducts(){
            fetch(this.url)
            .then((res)=>res.json())
            .then((json)=>{
                this.products_data=json;
            });
        },
        getCourse(){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res)=>res.json())
            .then((json)=>{
                this.course=Math.round(json.Valute.USD.Value);
            });
        }
    }
}
</script>