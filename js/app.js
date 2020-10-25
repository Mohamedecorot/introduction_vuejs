console.log("coucou")
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      link: 'https://vuejs.org/v2/guide/',
      success: true,
      persons: ['Mohamed', 'Lionel', 'Eric', 'Jean', "Sarah"]
    },
    methods: {
        close: function() {
            this.message = "Fermé"
            this.success = false
        }
    }
  })