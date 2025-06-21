<template>
    <div>
        <UIInput type="email"  placeholder="E-mail"   />

        <UIInput type="password"  placeholder="Senha"/>

        <UIButton text="Entrar"></UIButton>

        <UILink text="Esqueci minha senha" />
        
    </div>
</template>



<style scoped>

div{
    background-color: white;
    width: 300px;
    height: 260px;
    border-radius: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
   animation: sugir 1s ease-in-out;
}

@keyframes sugir{
    0%{
        transform: translateY(40px);
        opacity: 0;
    }

    100%{
        transform: translateY(0px);
        opacity: 100;
    }
}

</style>