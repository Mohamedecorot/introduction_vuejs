<template>
  <div>
    <button @click="toggle">Toggle</button>
    <transition name="bounce" appear>
        <div class="ui message success" v-if="visable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae
        nesciunt quia illo, omnis molestias ratione ullam ipsam blanditiis, totam
        reiciendis mollitia ut esse incidunt ducimus non magni impedit quaerat.
        </div>
    </transition>
  </div>
</template>
<script>
export default {
    data() {
        return {
            visable: true,
        };
    },
    methods: {
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