const app = Vue.createApp({
    data() {
        return {
            textSize: 1,
            couse:{ id: 1, name: 'Vue', price: '50' }
        }
    },
    methods: {
        crecer(size) {
            this.textSize += size;
        }
    }
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
        <slot></slot>
        <button @click="$emit('crecerTexto',1)">Ingrementar tamaño</button>
        `
});