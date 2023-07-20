let vm = new Vue ({
// element sur lequel on greffe vue 
    el: '#app',

    //contient les variable que l'on va injecté dans notre vue
    data: {

        seconds: 0
        
    },
    mounted: function() {

        // $ est utilise pour les propriete de logique de code et non pour appeler un propriété ci-dessus
        
        // console.log('Time')
        this.$interval = setInterval(() => {
        this.seconds++    
        }, 1000);
    },

    destroyed: function () {

        clearInterval(this.$interval)
    }

  

  
     
})


