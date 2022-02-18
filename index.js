
Vue.createApp({
    data() {
        return {
            titre: "<h3>TP DataBinding - Profile user</h3>",
            img: "https://picsum.photos/200",
            name: "AAA",
            age: 39,
        };
    },

    methods: {
        addNbr() {
            let age1 = this.age + 10;
            return age1;
        },

        srlNbr() {
            let random = Math.random();
            return random;
        }
    },
}).mount('#app');
