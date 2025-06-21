<template>
   
        <a href="">
            {{ text }}
        </a>
    
</template>


<script setup>
import { Style } from '#components';



const Props = defineProps({
    text:{
        type :String,
        default : "Erro"
    }
})


</script>


<style scoped>


div{
    color: black;
}

a{
    padding: 8px 40px;
    width: 250px;
    padding: 12px 40px;
    font-family: 'Roboto';
}



</style>