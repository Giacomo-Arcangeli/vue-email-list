const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      emails: [],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get(endpoint).then((res) => {
        responseEmail = res.data.response;
        this.emails.push(responseEmail);
      });
    }
  },
});

// La monto nell'elemento HTML "root"
app.mount("#root");
