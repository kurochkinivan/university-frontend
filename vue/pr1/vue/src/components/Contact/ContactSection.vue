<template>
    <section class="contact-section section-padding" id="section_5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <em class="text-white">Say Hello</em>
                    <h2 class="text-white mb-4 pb-lg-2">Contact</h2>
                </div>

                <div class="col-lg-6 col-12">
                    <form action="#" method="post" class="custom-form contact-form" role="form">
                        <div class="row">
                            <InputField label="Name" id="name" name="name" placeholder="Jackson" :required="true" />
                            <InputField label="Email Address" id="email" name="email" placeholder="Jack@gmail.com" type="email" :required="true" />

                        </div>
                        <TextareaWithLabel label="How can we help?" />

                        <div class="col-lg-5 col-12 mx-auto mt-3">
                            <button type="submit" class="form-control">Send Message</button>
                        </div>
                    </form>
                </div>

                <div class="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
                    <iframe class="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
                        width="100%" height="300" style="border: 0" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TextareaWithLabel from './TextareaWithLabel.vue';
import InputField from './InputField.vue';

export default {
    name: "ContactSection",
    components: {
        TextareaWithLabel,
        InputField,
    },
}
</script>