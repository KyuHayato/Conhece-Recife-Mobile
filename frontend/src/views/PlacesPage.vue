<template>
  
  <ion-header>
    <ion-toolbar>
      
      <ion-title class="ion-padding" style="color: white">
        CONHECE RECIFE
      </ion-title>

      <a href="/menu"><ion-button class="botao-topo">Voltar</ion-button></a>

    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <img
      src="https://maps.googleapis.com/maps/api/staticmap?&zoom=14&size=600x600&key=AIzaSyDdClJrWJLgSZg0FSFXK8MMCagE2fWDrZk&style=feature:poi|visibility:off&markers=-8.060459,-34.872069"
    />
    <ion-card
      style="padding-right: 200em; margin-right: 450em; margin-left: -2em"
    >
    </ion-card>

    <ion-row class="ion-padding-top" style="margin-top: 1em">
      <ion-col>
        <ion-card size="12" style="background-color: #2f80ed">
          <img />
          <ion-card-header style="background: #ffffff">
            <ion-card-title style="color: #000000; text-align: center"
              >Seu Boteco</ion-card-title
            >
            <ion-card-subtitle style="color: #000000; text-align: center">
              Seu Boteco- drinks bebida
            </ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-content>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { IonContent, IonHeader, IonToolbar } from "@ionic/vue";
import APIService from "@/services/api.service";
export default defineComponent({
  name: "PlacesPage",
  components: {
    IonContent,
    IonHeader,
    IonToolbar,
  },
  methods: {
  },
});

</script>

<style scoped>

ion-content {
  --background: #2f80ed;
}

ion-toolbar {
  --background: #2f80ed;
  height: 70px;
  text-align: center;
}


.botao-topo {
    position: absolute;
    top: 10px;
    left: 10px;
}

</style>
