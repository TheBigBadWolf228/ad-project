<template lang = "pug">
    v-dialog(width="400px", v-model="modal")
        template(v-slot:activator="{ on }")
            v-btn(v-on="on").primary Buy
        v-card
            v-container
                v-row
                    v-col(xs="12")
                        v-text-field(label='Your name', name='name', type='text', v-model="name")
                        v-text-field(label='Your phone', name='phone', type='text', v-model="phone")
                v-row
                    v-col(xs="12")
                        v-card-actions
                            v-spacer
                            v-btn(text, color="error", @click="onCancel") Cancel
                            v-btn(text, color="primary", @click="onSave") Buy it!
</template>

<script>
    export default {
        props: ['ad'],
        data() {
            return {
                modal: false,
                name: '',
                phone: ''
            }
        },
        methods: {
            onSave() {
                if (this.name !== '' && this.phone !== ''){
                    this.$store.dispatch('createOrder',{
                        name: this.name,
                        phone: this.phone,
                        adId: this.ad.id,
                        ownerId: this.ad.ownerId
                    })
                    .finally(() => {
                        this.name = ''
                        this.phone = ''
                        this.modal = false
                    })
                }

            },
            onCancel() {
                this.name = ''
                this.phone = ''
                this.modal = false
            }
        }
    }
</script>

<style scoped>

</style>