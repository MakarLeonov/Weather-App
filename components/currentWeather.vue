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
        max-width: 700px;
        margin: 0 auto;

        border: 2px solid #282828;
        border-radius: 20px;
        padding: 30px 20px;

        @media (max-width: 767px) {
            max-width: 80vw;
            padding: 10px 20px 30px;            
        }

        &__head {
            display: flex;
            align-items: center;

            @media (max-width: 767px) {
                flex-direction: column;
            }

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

                @media (max-width: 767px) {
                    &-temp {
                        font-size: 25px;
                    }
                    
                    &-feels-like {
                        font-size: 17px;
                    }
                }
            }
        }

        &__data {
            padding: 15px 10px;

            p {
                font-size: 18px;
                padding: 0 0 5px;

                @media (max-width: 767px) {
                    font-size: 16px;
                    padding: 0 0 3px;
                    text-align: center;
                }
            }
        }
    }
</style>