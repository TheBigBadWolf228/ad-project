<template lang="pug">
    v-container(class="fill-height", fluid)
        v-row(align="center", justify="center")
            v-col(cols="12", sm="8", md="4")
                v-card(class="elevation-12")
                    v-toolbar(color="primary", dark, flat)
                        v-toolbar-title Login
                    v-card-text
                        v-form(ref="form", v-model="valid", validation)
                            v-text-field(label='Email', name='email', prepend-icon='mdi-account', type='email', v-model="email", :rules="emailRules")
                            v-text-field(label='Password', name='password', prepend-icon='mdi-lock', type='password', v-model="password", :counter="8", :rules="passwordRules")
                    v-card-actions
                        v-spacer
                        v-btn(color='primary', @click = "onSubmit", :disabled="!valid || loading", :loading="loading") Login
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                email: '',
                password: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8) || 'Password must be equal or more then 8 characters',
                ]
            }
        },
        methods: {
            onSubmit() {
                if (this.$refs.form.validate()){
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    this.$store.dispatch('loginUser', user)
                    .then(() => {
                       this.$router.push('/')
                    })
                    .catch(err => console.log(err))
                }
            }
        },
        computed: {
            loading(){
                return this.$store.getters.loading
            }
        },
        created() {
            if (this.$route.query['loginError']){
                this.$store.dispatch('setError', 'Please login to access this page')
            }
        }
    }
</script>

<style scoped>

</style>