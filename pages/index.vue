<template>
    <div>
        <CartBut />
        <div class="sort-title">
            <h2>Категории</h2>
        </div>
        <div class="sort-wrapper">
        <div class="sort-cont">
            <div class="button-wrapper"><button
                    @click="if (url=='https://fakestoreapi.com/products'){} else{url='https://fakestoreapi.com/products';products_data=null;getProducts()}">Все</button>
            </div>
            <div class="button-wrapper"><button
                    @click="if (url=='https://fakestoreapi.com/products/category/electronics'){} else{url='https://fakestoreapi.com/products/category/electronics';products_data=null;getProducts()}">Электроника</button>
            </div>
            <div class="button-wrapper"><button
                    @click="if (url=='https://fakestoreapi.com/products/category/jewelery'){} else{url='https://fakestoreapi.com/products/category/jewelery';products_data=null;getProducts()}">Ювелирные
                    изделия</button></div>
            <div class="button-wrapper"><button
                    @click="if (url=='https://fakestoreapi.com/products/category/men\'s clothing'){} else{url='https://fakestoreapi.com/products/category/men\'s clothing';products_data=null;getProducts()}">Мужская
                    одежда</button></div>
            <div class="button-wrapper"><button
                    @click="if (url=='https://fakestoreapi.com/products/category/women\'s clothing'){} else{url='https://fakestoreapi.com/products/category/women\'s clothing';products_data=null;getProducts()}">Женская
                    одежда</button></div>
        </div>
        </div>
        <div class="load" v-if="!products_data || !course">
            <p>Загрузка...</p>
        </div>
        <div v-else>
            <div class="container">
                <div class="card-container">
                    <CardProduct v-for="item, index of products_data" :products-data="item" :course="course"
                        v-bind:key="item.id" />
                </div>
            </div>
            <div class="pag-container">
                <div class="pagbut-cont" v-for="item of count_pages"><button
                        @click="current_page=item;Pagination(arr_json,current_page);console.log(current_page)">{{item}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.cart {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: 0.1s;
  cursor: pointer;
  position: fixed;
  top: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border: 0;
}
.cart__image{height: 100%;}
.cart:hover {
  transform: scale(1.1);
}
.cart__num {
  position: absolute;
  background-color: #d62240;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  top: -5px;
  right: -5px;
}
.pagbut-cont{padding-right: 10px;}
.pag-container{display: flex;justify-content: center;padding-bottom: 30px;}
.pag-container button{font-family: Inter;padding-top:5px ;padding-bottom: 5px;font-size: 1.125rem;color: white;background-color: #3077FB;border-radius: 5px;border:0;width:30px;}
.button-wrapper{padding-left: 10px;}
.button-wrapper button:active{background-color: #284f96;}
.button-wrapper button {font-family: Inter;padding-top:5px ;padding-bottom: 5px;font-size: 1.125rem;color: white;background-color: #3077FB;border-radius: 5px;border:0}
.sort-title h2 {font-family: Inter;font-weight: 400;font-size: 2rem;}
.sort-title {display: flex;justify-content: flex-start;max-width: 880px;margin: 0 auto;padding-left: 10px;}
.sort-wrapper{overflow: hidden;width: 100%;display: flex;justify-content: center;}
.sort-cont{overflow: auto;
    white-space: nowrap;
    padding-bottom: 20px;
    margin-bottom: -20px;;display: flex;max-width: 880px;}
.container{display: flex;justify-content: center;}
.card-container {display: flex;justify-content:flex-start;max-width: 927.5px;flex-wrap: wrap;}
.load{text-align: center;font-family: Inter;font-size: 2.5rem;font-weight: 700;color: #3077FB;padding-top: 50px;}
@media screen and (max-width:915px){
    .card-container{justify-content: center;}
    .cart{top:40px;right: 20px;}
    
}
</style>
<script>
export default{
    data(){
        return{
            products_data:null,
            course:null,
            url:'https://fakestoreapi.com/products',
            arr_json:null,
            count_pages:0,
            current_page:1
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
                let strJson=JSON.stringify(json);
                let jsonArray = JSON.parse(strJson);
                this.arr_json=jsonArray;
                this.count_pages=Math.ceil(jsonArray.length/10);
                this.Pagination(jsonArray,this.current_page);
            });
        },
        getCourse(){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res)=>res.json())
            .then((json)=>{
                this.course=Math.round(json.Valute.USD.Value);
            });
        },
        Pagination(array, currentPage, pageSize = 10) {
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            this.products_data=array.slice(startIndex, endIndex);
        }
    }
}
</script>