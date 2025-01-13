<template>
    <div :class="['timeline-container', { 'timeline-container-right': isRight }]">
        <div class="timeline-content">
            <div class="reviews-block">
                <AvatarSection :author="testimonial.author" />

                <div class="reviews-block-info">
                    <p>{{ testimonial.descr }}</p>

                    <RatingSection :rating="testimonial.rating" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarSection from './AvatarSection.vue';
import RatingSection from './RatingSection.vue';

export default {
    name: "ReviewCard",
    components: {
        AvatarSection,
        RatingSection,
    },
    props: {
        testimonial: {
            type: Object,
            required: true,
        },
        isRight: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
