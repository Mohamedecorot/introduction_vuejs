<template>
  <div>
    <button @click="toggle">Toggle</button>
    <transition name="bounce" appear mode="out-in">
        <div class="ui message success" v-if="visable" key="visable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae
        nesciunt quia illo, omnis molestias ratione ullam ipsam blanditiis, totam
        reiciendis mollitia ut esse incidunt ducimus non magni impedit quaerat.
        </div>
        <div class="ui message success" v-else key="invisable">
        ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae
        nesciunt quia illo, omnis molestias ratione ullam ipsam blanditiis, totam
        reiciendis mollitia ut esse incidunt ducimus non magni impedit quaerat.
        </div>
    </transition> 
    <transition-group name="bounce" tag="ul">
        <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
    <button class="ui button" @click="add">Ajouter</button>
    <button class="ui button error" @click="shuffle">Mélanger</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            visable: true,
            items: [1,2,3,4,5]
        }
    },
    methods: {
        add: function() {
            this.items.push(Math.random())
        },
        shuffle: function() {
            this.items = [2,3,5,4,6]
        },
        toggle: function() {
            this.visable = !this.visable;
        },
    },
};
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s, trnasform 0.5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }
    .bounce-move{
        transition: transform 10s;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
</style>