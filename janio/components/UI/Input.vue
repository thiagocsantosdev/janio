<template>
    <input 
    :type ="type"
    :placeholder ="placeholder"
    class="input-icon"
    :style="{ color: iconColor }"
    >
</template>




<style scoped>

input{
    border: 1px solid lightblue;
    border-radius: 8px;
    padding: 12px 40px;
    width: 250px;
    font-family: 'Roboto';
    font-size: 1.1rem;
    font-weight: 500;
}



</style>


<script setup>

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  
})


</script>