<template>
    <div class="reviews-block-image-wrap d-flex align-items-center">
        <img :src="author.avatar" class="reviews-block-image img-fluid" alt="" />
        <div>
            <h6 class="text-white mb-0">{{ author.name }}</h6>
            <em class="text-white">{{ author.who }}</em>
        </div>
    </div>
</template>

<script>
export default {
    name: "AvatarSection",
    props: {
        author: {
            type: Object,
            required: true,
        },
    },
}
</script>