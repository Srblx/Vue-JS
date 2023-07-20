let vm = new Vue ({
    // element sur lequel on greffe vue 
        el: '#app',
    
        //contient les variable que l'on va injecté dans notre vue
        data: { 
            success: false,
            message: 'salut',
            firstname: 'Jean',
            lastname: 'Delatour',
            fullname: ''
    

        },

        //* methods: {

        //     cls: function () {
        //         console.log('cls called')
        //         return this.success === true ? 'success' : 'error'
        //     }
        // *},

//      !   // propriete qui depend de proriete qui sont au niveau de norte instance 
//       !  // mets en cache les valeur
//         computed: {

//             cls: function () {
//                 console.log('cls called')
//                 return this.success === true ? 'success' : 'error'
//             },

//             // fullname: function () {
//             //     return this.firstname + ' ' + this.lastname
//             // }

//             //^ definition getter setter
//             fullname: {
//             get: function () {
//                 return this.firstname + ' ' + this.lastname
//             },

//             set: function (value) { 
//                 console.log(value)
//             }

// ! }
//  !       },


// ^ detecte le changement d'un variable 
watch: {

    fullname: function (value) {
        console.log('watch', value)
    }
}

    })