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
                            v-btn.secondary(@click="triggerUpload") Upload
                                v-icon(dark) {{uploadIcon}}
                            input(ref="fileInput", type="file", style="display: none;", accept="image/*", @change="onFileChange")



            v-col(xs="12", sm="6", offset-sm="3").text-center
                v-switch(v-model='promo', label='Add to promo?')
                v-img(:src="imageSrc", height="200", v-if="imageSrc")
                v-card-actions
                    v-spacer
                    v-btn.primary(@click="createAd", :disabled="!valid || !image" || loading, :loading="loading") Create ad

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
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        methods:{
            createAd() {
                if (this.$refs.form.validate() && this.image){
                    //logic
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image

                    }
                    this.$store.dispatch('createAd', ad)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(() => {})
                }

            },
            triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0]
                const reader = new FileReader()

                // eslint-disable-next-line no-unused-vars
                reader.onload = e => {
                    this.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>