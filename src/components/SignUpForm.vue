<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <br />
    <input type="email" required placeholder="email" v-model="email" />
    <br />
    <input type="password" required placeholder="password" v-model="password" />
    <br />
    <div class="error">{{ error }}</div>
    <br />
    <button>Sign Up Here</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/userSignup";
export default {
  setup(props,context) {
    const { error, signup } = useSignup();

    const displayName = ref();
    const email = ref();
    const password = ref();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log(displayName.value, email.value, password.value);
    if(!error.value){
        context.emit('signUp')
    }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>