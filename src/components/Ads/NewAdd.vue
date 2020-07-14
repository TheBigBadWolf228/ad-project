<template lang="pug">
    v-container
        v-row.mb-3
            v-col(cols="12",xs="12", sm="6", offset-sm="3")
                h1.text--secondary Create new ad
                    v-card-text
                        v-form(ref="form", v-model="valid", validation)
                            v-text-field(label='Add title', name='title', type='text', v-model="title", required, :rules="[v => !!v || 'Title is required']")
                            v-textarea(label='Add description', name='description', type='text', v-model="description",   :rules="[v => !!v || 'Description is required']")
                        v-card-actions
                            v-spacer
                            v-btn.secondary Upload
                                v-icon(dark) {{uploadIcon}}


            v-col(xs="12", sm="6", offset-sm="3").text-center
                v-switch(v-model='promo', label='Add to promo?')
                v-img(src="", height="100")
                v-card-actions
                    v-spacer
                    v-btn.primary(@click="createAd", :disabled="!valid") Create ad

</template>

<script>
    export default {
        name: "NewAdd",
        data() {
            return {
                uploadIcon: 'mdi-cloud-upload',
                uploadText: 'Upload',
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },
        methods:{
            createAd() {
                if (this.$refs.form.validate()){
                    //logic
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo
                    }
                    console.log(ad)
                }

            }
        }
    }
</script>

<style scoped>

</style>