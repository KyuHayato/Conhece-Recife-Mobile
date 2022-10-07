<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <div>
          <ion-img
            src="../../assets/Conhece-recife.svg"
            style="
              width: 135px;
              height: 143px;
              padding-bottom: 20px;
              display: block;
              margin: 0px auto;
            "
          ></ion-img>
        </div>
        <div>
          <ion-row class="ion-justify-content-center">
            <ion-col size="10">
              <a href="/menu/places/">
                <button :style="buttonVars" size="large" class="button-style">
                  Conheça Lugares
                </button>
              </a>
            </ion-col>
            <ion-col size="10">
              <a href="/menu/whopage/">
                <button :style="buttonVars" size="large" class="button-style">
                  Quem Somos
                </button>
              </a>
            </ion-col>
            <ion-col size="10">
              <a href="/menu/contacts/">
                <button size="large" :style="buttonVars" class="button-style">
                  Contato
                </button>
              </a>
            </ion-col>
          </ion-row>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonButton, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

let pixe = "red";

export default defineComponent({
  name: "MenuPage",
  components: {
    IonContent,
    IonImg,
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    buttonVars() {
      return {
        "background-size": "auto",
        "background-clip": "border-box",
        color: "black",
        "font-size": "20px",
        "font-weight": "bold",
        backgroundColor: "#e78500",
      };
    },
  },
});
</script>

<style scoped>
ion-content {
  --background: #2f80ed;
}

a:hover {
  cursor: pointer;
}
.button-style {
  width: 329.51px;
  height: 78px;
  border-radius: 15px;
}

#container {
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
