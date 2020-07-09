<template lang="pug">
    v-container(class="fill-height", fluid)
        v-row(align="center", justify="center")
            v-col(cols="12", sm="8", md="4")
                v-card(class="elevation-12")
                    v-toolbar(color="primary", dark, flat)
                        v-toolbar-title Registration
                    v-card-text
                        v-form(ref="form", v-model="valid", lazy-validation)
                            v-text-field(label='Email', name='email', prepend-icon='mdi-account', type='email', v-model="email", :rules="emailRules")
                            v-text-field(label='Password', name='password', prepend-icon='mdi-lock', type='password', v-model="password", :counter="8", :rules="passwordRules")
                            v-text-field(label='Confirm password', name='confirm-password', prepend-icon='mdi-lock', type='password', v-model="confirmPassword", :counter="8", :rules="confirmPasswordRules")
                    v-card-actions
                        v-spacer
                        v-btn(color='primary', @click = "onSubmit", :disabled="!valid") Create account
</template>

<script>
    export default {
        name: "Registration",
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8) || 'Password must be equal or more then 8 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Confirm password is required',
                    v => (this.password === v) || 'Passwords should be the same'
                ]
            }
        },
        methods: {
            onSubmit() {
                //logic
            }
        }
    }
</script>

<style scoped>

</style>