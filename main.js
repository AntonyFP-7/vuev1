const app = Vue.createApp({
    data() {
        return {
            textSize: 1,
            title: 'Hello Vue',
            couses: [
                { id: 1, name: 'Vue', price: '50' },
                { id: 2, name: 'React', price: '60' },
                { id: 3, name: 'Angular', price: '70' }
            ]
        }
    },
    methods: {
        crecer(size) {
            this.textSize += size;
        }
    }
});
app.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template:
        `<button  @:click="count++">
    Haz echo click {{count}} veses
    </button>
    `
});
app.component('details-course', {
    data() {
        return {

        }
    },
    props: ['course'],
    template: `
        <h1> {{course.name}}</h1>
        <p>El precio es {{'$ '+course.price}}</p>
        <button @click="$emit('crecerTexto',1)">Ingrementar tamaño</button>
        `
});