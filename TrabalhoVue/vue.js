Vue.component('formulario', {
    template:"#form",
    props:['tipo', 'nome', 'valor'],
    methods: {
        addEmbarcacao(tipo, nome, valor){
            this.$emit('embarcacoes', tipo, nome, valor)
        }
    }
})

var app = new Vue({
    el: '#app',
    data() {
        return{
            embarcacoes:[]
        }
    },
    methods: {
        cadastrarEmbarcacao(tipo, nome, valor){
            this.embarcacoes.push({tipo: tipo, nome: nome, valor: valor})
    }
}
})