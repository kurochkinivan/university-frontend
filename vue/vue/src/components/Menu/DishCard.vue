<template>
    <div class="menu-block my-4">
        <div class="d-flex">
            <h6>
                {{ dish.name }}
                <span v-if="dish.isRecommended" class="badge ms-3">Recommend</span>
            </h6>

            <span class="underline"></span>
            <div class="ms-auto">
                <strong v-if="dish.oldPrice" class="text-white ms-auto">
                    <s>{{ dish.oldPrice }}</s>
                </strong>
                <strong class="ms-2">{{ dish.price }}</strong>
            </div>
        </div>

        <div class="border-top mt-2 pt-2">
            <small>{{ dish.descr }}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "DishCard",
    props: {
        dish: {
            type: Object,
            required: true,
        },
    },
};
</script>
