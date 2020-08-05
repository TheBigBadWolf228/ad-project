<template lang="pug">
    v-container
        v-row
            v-col(cols="12", xs="12", sm="4")
                h1.text--secondary Orders
                v-list(subheader='', two-line='', text='').mt-4
                    v-list-item-group(multiple='', v-for="order in orders", :key="order.id")
                        v-list-item
                            template(v-slot:default='{ active, toggle }')
                                v-list-item-action
                                    v-checkbox(color='primary', @change="markDone(order)", :input-value="order.done")
                                v-list-item-content
                                    v-list-item-title {{order.name}}
                                    v-list-item-subtitle {{order.phone}}
                                v-list-item-action
                                    v-btn.primary(:to="'/ad/' + order.adId") Open

</template>

<script>
    export default {
        name: "Orders",
        methods: {
            markDone(order){
                this.$store.dispatch('markOrderDone', order.id)
                .then(() => {
                    order.done = true
                })
                .catch(() => {

                })
                order.done = true
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            orders() {
                return this.$store.getters.orders
            }
        },
        created() {
            this.$store.dispatch('fetchOrders')
        }
    }
</script>

<style scoped>

</style>