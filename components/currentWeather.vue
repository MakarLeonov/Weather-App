<template>
    <div>
        <div class="current-weather">
            <div>
                <div class="current-weather__head">
                    <img :src="`https://openweathermap.org/img/wn/${store.weather.icon}@2x.png`" class="current-weather__head-icon" alt="icon">

                    <div class="current-weather__head-info">
                        <div class="current-weather__head-info-temp">{{ store.weather.temp }}°, {{ store.weather.description }}</div>
                        <div class="current-weather__head-info-feels-like">Ощущается как {{ store.weather.feels_like }}°</div>
                    </div>
                </div>
                
                <div class="current-weather__data">
                    <p>Давление: {{ store.weather.pressure }} мм рт. ст.</p>
                    <p>Влажность: {{ store.weather.humidity }}%</p>

                    <p>Минимальная температура: {{ store.weather.temp_min }}°</p>
                    <p>Максимальная температура: {{ store.weather.temp_max }}°</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const store = useStore()
</script>

<style lang="scss">
    .current-weather {
        max-width: 80vw;
        margin: 0 auto;

        border: 2px solid #282828;
        border-radius: 20px;
        padding: 30px 20px 10px;
        padding: 30px 20px;

        &__head {
            display: flex;
            align-items: center;

            &-icon {
                width: 130px;
                height: 130px;
                border-radius: 75px;
                margin: 0 20px 0 0;
            }

            &-info {
                
                &-temp {
                    font-size: 40px;
                    font-weight: 600;
                    color: #282828;
                }
                
                &-feels-like {
                    font-size: 22px;
                    font-weight: 500;
                    color: #282828;
                }
            }
        }

        &__data {
            padding: 15px 10px;

            p {
                font-size: 18px;
                padding: 0 0 5px;
            }
        }
    }
</style>