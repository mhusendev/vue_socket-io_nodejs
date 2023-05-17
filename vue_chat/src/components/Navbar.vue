<template>
<nav class="w-full h-20 bg-slate-900 flex pl-10 pt-5 text-white">
   <h1 class="font-bold">{{ data }}</h1>
 </nav>
</template>
<script>
export default {
    name: 'navbar',
    props: ['data']
}
</script>
