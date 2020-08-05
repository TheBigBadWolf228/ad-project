<template lang = "pug">
    v-dialog(width="400px", v-model="modal")
        template(v-slot:activator="{ on }")
            v-btn(v-on="on") Edit
        v-card
            v-container
                v-row
                    v-col(xs="12")
                        v-text-field(label='Title', name='title', type='text', v-model="editedTitle")
                        v-text-field(label='Description', name='description', type='text', v-model="editedDescription")
                v-row
                    v-col(xs="12")
                        v-card-actions
                            v-spacer
                            v-btn(text, color="error", @click="onCancel") Cancel
                            v-btn(text, color="primary", @click="onSave") Save
</template>

<script>
    export default {
        props: ['ad'],
        name: "EditAdModal",
        data() {
            return {
                modal: false,
                editedDescription: this.ad.description,
                editedTitle: this.ad.title
            }
        },
        methods: {
            onSave() {
                if (this.editedDescription !== '' && this.editedTitle !== ''){
                    this.$store.dispatch('updateAd',{
                        title: this.editedTitle,
                        description: this.editedDescription,
                        id: this.ad.id
                    })

                    this.modal = false
                }

            },
            onCancel() {
                this.editedTitle = this.ad.title
                this.editedDescription = this.ad.description
                this.modal = false
            }
        }
    }
</script>

<style scoped>

</style>