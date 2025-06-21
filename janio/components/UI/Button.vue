<template>
    <button >
       {{text }}
    </button>
</template>

<script setup>

const Props = defineProps({
        text :{
            type:String,
            default:'Erro'
        }
    })


</script>


<style>


button{
    background-color: green;
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