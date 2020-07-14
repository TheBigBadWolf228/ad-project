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
        data () {
            return {
                orders: [
                    {
                        id: 'raw',
                        name: 'Dima',
                        phone: '89213602',
                        adId: '123',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone(order){
                order.done = true
            }
        }
    }
</script>

<style scoped>

</style>