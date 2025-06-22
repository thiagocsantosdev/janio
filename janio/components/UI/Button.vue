<template>
    <button :style="{ backgroundColor : `var(${backgroundColor})` }">
       {{text }}
    </button>
</template>

<script setup>

const {text, backgroundColor} = defineProps({
        text :{
            type:String,
            default:'Erro'
        },

       backgroundColor:{
            type:String,
            default:'Black'
        }
    })


</script>


<style>


button{
    
    border-radius: 8px;
    padding: 12px 40px;
    width: 250px;
    color: white;
    border: none;
    font-family: 'Roboto';
    font-size: 1.1rem;
    opacity: .8;
    transition: 600ms;
}


button:hover{
    opacity: 1;
    transition: 600ms;
    cursor: pointer;
}




</style>