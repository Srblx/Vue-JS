let vm = new Vue ({
// element sur lequel on greffe vue 
    el: '#app',

    //contient les variable que l'on va injecté dans notre vue
    data: {

        message: 'Salut les gens',
        link: 'https://serbelloni.vercel.app',
        succes: true,

        persons:  ['Alexis', 'Marine', 'Oceanne', 'Jeff', 'Marion'],

        seconds: 0
        // style: {background: '#000', padding: '2rem'}
    },
    mounted: function() {

        setInterval(() => {
        this.seconds++    
        }, 1000);
    },

    methods: {

        close: function() {

            // this permet d'appeler toute les propriete injecté au niveau de la vue
            this.succes = false
        },

        open: function() {

            this.succes = true
        },

        style: function() {
            if(this.succes){
                return {background: '#00FF00', padding: '2rem'}
            }
            else {
                return {background: '#FF0000', padding: '2rem'}
            }
        },

        addPerson: function() {
            this.persons.push('Karine') 
        }
    }
})


