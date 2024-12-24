<template>
    <div class="col-lg-6 col-12">
        <label :for="id" class="form-label">{{ label }} <sup v-if="required" class="text-danger">*</sup></label>
        <input :type="type" :name="name" :id="id" class="form-control" :placeholder="placeholder"
            :required="required" />
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
};
</script>