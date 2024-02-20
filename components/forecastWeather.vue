<template>
    <div>
        <div class="forecast">
            <div class="forecast__title">Погода на 5 дней:</div>
            <div v-for="(item, index) in store.forecast" :key="index" class="item">
                <div class="item__left">
                    <img :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" class="item__left-icon" alt="icon">

                    <div class="item__left-info">
                        <div class="item__left-info-temp">{{  Math.round(item.main.temp  - 273.15)}}°, {{ item.main.description }}</div>
                        <div class="item__left-info-feels-like">Ощущается как {{ Math.round(item.main.feels_like  - 273.15) }}°</div>
                    </div>
                </div>

                <div class="item__right">
                    <p>Описание: {{ item.weather[0].description }}</p>
                    <p>Давление: {{ item.main.pressure }}</p>
                    <p>Влажность: {{ item.main.humidity }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const store = useStore()

    
</script>

<style lang="scss">
    .forecast {
        max-width: 80vw;
        margin: 0 auto;

        border: 2px solid #282828;
        border-radius: 20px;
        padding: 30px 20px 10px;
        padding: 30px 20px;
        
        &__title {
            font-size: 20px;
            padding: 0 0 7px 0;
        }

        .item {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;

            border-radius: 10px;
            padding: 10px;
            margin: 0 0 20px;
            transition: background .25s ease-in-out;

            &:hover {
                background: rgb(238, 238, 238);
            }

            &__left {
                display: flex;
                align-items: center;

                &-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 75px;
                    margin: 0 10px 0 0;
                }

                &-info {
                    
                    &-temp {
                        font-size: 25px;
                        font-weight: 600;
                        color: #282828;
                    }
                    
                    &-feels-like {
                        font-size: 16px;
                        font-weight: 500;
                        color: #282828;
                    }
                }
            }
        }
    }
</style>