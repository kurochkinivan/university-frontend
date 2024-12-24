<template>
    <div class="d-flex border-top pt-3 mt-4">
        <strong class="text-white">
            {{ rating }}
            <small class="ms-2">Rating</small>
        </strong>

        <div class="reviews-group ms-auto">
            <i v-for="(starClass, i) in generateStarsClass(rating)" :key="i" :class="starClass"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "RatingSection",
    props: {
        rating: {
            type: Number,
            required: true,
        },
    },
    methods: {
        generateStarsClass(rating) {
            const starsClass = [];
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5; 

            for (let i = 0; i < fullStars; i++) {
                starsClass.push('bi-star-fill');
            }

            if (hasHalfStar) {
                starsClass.push('bi-star-half');
            }

            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                starsClass.push('bi-star');
            }

            return starsClass;
        },
    },
}
</script>