<template>
    <div class="wrapper">
        <header>
            <div class="searchCity">
                <input v-model.trim="nameOfCity" @keyup.enter="store.getCoordinates(nameOfCity)" type="text" placeholder="Введите название города">
                <button @click="store.getCoordinates(nameOfCity)">Искать</button>
            </div>

            <span>{{ store.city }}</span>
        </header>

        <slot></slot>
    </div>
</template>
<script setup >
const store = useStore()

const nameOfCity = ref('')

</script>
<style lang="scss">
.wrapper {
    padding: 0 0 50px;
}

header {
    padding: 20px 50px;
    margin: 0 0 50px;
    background: #282828;

    display: flex;
    justify-content: space-between;

    .searchCity {
        display: flex;
        align-items: flex-end;
    }
    
    input,
    button {
        padding: 10px 13px;
        border: none;
        border-radius: 5px;
        margin: 0 7px 0 0;
        font-size: 16px;
        border: 1px solid #fff;
    }

    button {
        cursor: pointer;
        background: 0;
        color: #fff;

        transition: 
            background .25s ease-in-out,
            color .25s ease-in-out;

        &:hover {
            background: #fff;
            color: #282828;
        }
    }

    span {
        color: #fff;
        font-size: 22px;
    }

}
</style>