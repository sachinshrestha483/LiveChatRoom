<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <br />
    <input type="password" required placeholder="password" v-model="password" />
    <br />
    <p class="error">{{ error }}</p>
    <br />
    <button>Login Here</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup(props,context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      console.log(email.value, password.value);

      await login(email.value, password.value);
if(!error.value){
        context.emit('login')
    }
     
    };

    return { email, password, handleSubmit, error };
  },
};
</script>