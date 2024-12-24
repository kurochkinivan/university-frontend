<template>
    <div class="menu-block-wrap">
        <div class="text-center mb-4 pb-lg-2">
            <em class="text-white">{{ menu.name }}</em>
            <h4 class="text-white">{{ menu.type }}</h4>
        </div>

        <DishCard 
            v-for="item in menu.items" 
            :key="item.name" 
            :dish="item" 
        />
    </div>
</template>

<script>
import DishCard from './DishCard.vue';

export default {
    name: "MenuCard",
    components: {
        DishCard,
    },
    props: {
        menu: {
            type: Object,
            required: true,
        },
    },
};
</script>