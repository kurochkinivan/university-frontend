<template>
    <section class="barista-section section-padding section-bg" id="barista-team">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                    <em class="text-white">Creative Baristas</em>

                    <h2 class="text-white">Meet People</h2>
                </div>

                <div v-for="people in peoples" :key="people.name + people.tag" class="col-lg-3 col-md-6 col-12 mb-4">
                    <div class="team-block-wrap">
                        <div class="team-block-info d-flex flex-column">
                            <div class="d-flex mt-auto mb-3">
                                <h4 class="text-white mb-0">{{ people.name }}</h4>

                                <p class="badge ms-4">
                                    <em>{{ people.tag }}</em>
                                </p>
                            </div>

                            <p class="text-white mb-0">{{ people.tagline }}</p>
                        </div>

                        <div class="team-block-image-wrap">
                            <img :src="people.image" class="team-block-image img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BaristaSection",
    props: {
        peoples: {
            type: Array,
            required: true,
        },
    },
};
</script>