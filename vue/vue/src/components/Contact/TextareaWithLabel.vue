<template>
    <div class="col-12">
        <label for="message" class="form-label">{{ label }}</label>

        <textarea name="message" rows="4" class="form-control" id="message" placeholder="Message"
            required=""></textarea>
    </div>
</template>

<script>
export default {
    name: "TextareaWithLabel",
    props: {
        label: {
            type: String,
            required: true,
        },
    },
}
</script>