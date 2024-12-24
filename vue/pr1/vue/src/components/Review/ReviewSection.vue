<template>
    <section class="reviews-section section-padding section-bg" id="section_4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                    <em class="text-white">Reviews by Customers</em>
                    <h2 class="text-white">Testimonials</h2>
                </div>

                <div class="timeline">
                    <template v-for="(testimonial, index) in testimonials" :key="testimonial.author.name">
                        <ReviewCard :testimonial="testimonial" :isRight="index % 2 === 1" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ReviewCard from './ReviewCard.vue';

export default {
    name: "ReviewSection",
    components: {
        ReviewCard,
    },
    props: {
        testimonials: {
            type: Array,
            required: true,
        },
    },
};
</script>
