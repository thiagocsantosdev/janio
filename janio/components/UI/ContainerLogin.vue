<template>
        <div class="container-main">
            <UILogo />
            <UIContainerLoginForm id="UIContainerLoginForm"/>
            
            
    </div>
</template>

<style scoped>

.container-main{

   
height: 600px;
width: 400px;
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
animation: sugir 2s;
}


@keyframes sugir{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>