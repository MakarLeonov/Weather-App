<script setup>
const store = useStore()

</script>

<template>
    <div>
        <div v-if="store.city == '' && store.errorMessage == ''" class="error-message">Чтобы получить данные о погоде, ведите название вашего города</div>

        <div v-else-if="store.city !== '' && store.errorMessage == ''">
            <currentWeather />
            <br>
            <forecastWeather />
        </div>
        
        <div v-else class="error-message">{{ store.errorMessage }}</div>
    </div>
</template>

<style lang="scss">
    .error-message {
        max-width: 80vw;
        border: 2px solid #282828;
        border-radius: 20px;
        padding: 30px 20px;
        margin: 0 auto;

        text-align: center;
    }
</style>