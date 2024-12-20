<template>
<header>
    <div class="logo">
    <NuxtLink to="/">FastTrader</NuxtLink></div>
</header>
<slot />
</template>
<style>
header,html,body{margin:0;padding: 0;}
header{background-color: white;border-bottom: 1px solid #E8E8E8;height: 70px;}
.logo a:visited {
  text-decoration: none;
  color: #3077FB;
}
.logo a:active{
    color: #2c5196;
}
.logo {font-size: 2.25rem;font-family: Inter;font-weight: 700;max-width: 1100px;margin: 0 auto;padding-top: 13px;padding-left: 10px;}
</style>