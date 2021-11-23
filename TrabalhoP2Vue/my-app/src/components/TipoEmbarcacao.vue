<template>
  <v-data-table
    :headers="headers"
    :items="tipoEmbarcacao"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Tipos de Embarcação</v-toolbar-title>
        <v-divider class="mx-4" insert vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="700px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" rounded dark class="mb-2" v-bind="attrs" v-on="on">
              Novo Tipo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="2" md="2">
                    <v-text-field
                      v-model="editedItem.id"
                      label="Id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.tipoEmb"
                      label="Tipo de Embarcação"
                    ></v-text-field>
                  </v-col>
                </v-row>  
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Salvar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" dark @click="inicializa"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import axios from "axios";
  export default {
    name: "TipoEmbarcacao",
    data: () => ({
      dialog: false,
      headers: [
        { text: "Id", value: "id" },
        { text: "Tipo", value: "tipoEmb" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      tipoEmbarcacao:[{id: "", tipoEmb: ""}],
      editedIndex: -1,
      editedItem: {
        id: "",
        tipoEmb: "",
      },
      editedItemIndex: -1,
      defaultItem: {
        id: "",
        tipoEmb: "",
      },
    }),
    methods: {
    /*Importar a descrição
    tipoEmb(id){
      var tipoEmb = this.tipoEmbarcacao.find((x) => x.id ===id);
      tipoEmb = tipoEmb ? tipoEmb.tipoEmb : "Tipo inválido";
      return tipoEmb;
    }, */
      inicializa() {
        /*axios("http://localhost:3000/embarcacoes")
          .then((response) => {
            this.embarcacoes = response.data;
          })
          .catch((error) => console.log(error));*/
        axios("http://localhost:3000/tipoEmbarcacao")
          .then((response) => {
            this.tipoEmbarcacao = response.data;
          })
          .catch((error) => console.log(error));
      },
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      },
      save() {
        if (this.editedIndex > -1) {
          //Alteracao
          axios
            .put(
              "http://localhost:3000/tipoEmbarcacao/" + this.editedItem.id,
              this.editedItem
            )
            .then((response) => {
              console.log(response);
              Object.assign(this.tipoEmbarcacao[this.editedIndex], this.editedItem);
              this.close();
            })
            .catch((error) => console.log(error));
        } else {
          //Inclusao
          axios
            .post("http://localhost:3000/tipoEmbarcacao", this.editedItem)
            .then((response) => {
              console.log(response);
              this.tipoEmbarcacao.push(this.editedItem);
              this.close();
            })
            .catch((error) => console.log(error));
        }
      },
      editItem(item) {
        this.editedIndex = this.tipoEmbarcacao.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
      deleteItem(item) {
        const index = this.tipoEmbarcacao.indexOf(item);
        confirm("Deseja apagar este item?") &&
          axios
            .delete("http://localhost:3000/tipoembarcacao/" + item.id)
            .then((response) => {
              console.log(response.data);
              this.tipoEmbarcacao.splice(index, 1);
            })
            .catch((error) => console.log(error));
      },
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "Novo Tipo de Embarcação" : "Editar Tipo";
      },
    },

    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },

    created() {
      this.inicializa();
    },
  };
</script>

<style scoped>
</style>