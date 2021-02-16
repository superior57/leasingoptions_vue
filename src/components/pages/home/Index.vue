<template>
    <div>
        <Hero></Hero>
        <Options></Options>
        <CarEasy></CarEasy>
        <CarShop></CarShop>
        <CarExchange></CarExchange>
        <Marks></Marks>
        <Certificates></Certificates>
    </div>
</template>

<script>
    import Hero from "./sections/Hero.vue";
    import Options from "./sections/Options.vue";
    import CarEasy from "./sections/CarEasy.vue";
    import CarShop from "./sections/CarShop.vue";
    import CarExchange from "./sections/CarExchange.vue";
    import Marks from "./sections/Marks.vue";
    import Certificates from "./sections/Certificates.vue";

    export default {
        components: {
            Hero,
            Options,
            CarEasy,
            CarShop,
            CarExchange,
            Marks,
            Certificates
        }
    }
</script>

<style lang="scss" scoped>

</style>