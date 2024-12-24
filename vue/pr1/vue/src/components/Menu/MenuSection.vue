<template>
    <section class="menu-section section-padding" id="section_3">
        <div class="container">
            <div class="row">
                <div 
                    v-for="menu in menus" 
                    :key="menu.name + menu.type" 
                    class="col-lg-6 col-12"
                >
                    <MenuCard :menu="menu" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MenuCard from './MenuCard.vue';

export default {
    name: "MenuSection",
    components: {
        MenuCard,
    },
    props: {
        menus: {
            type: Array,
            required: true,
        },
    },
};
</script>
