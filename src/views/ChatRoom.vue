<template>
  <div class="container">
    <Navbar />
    <h1 style="text-align:center">Chat Room</h1>
    <chatWindow />
  <NewChatForm />
  </div>
  
</template>

<script>
import Navbar from "../components/Navbar";
import { projectAuth } from "../Firebase/config";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";
import NewChatForm from "../components/NewChatForm"
import chatWindow from "../components/chatWindow"

export default {
  components: { Navbar,NewChatForm,chatWindow },
  setup() {
   
     const router = useRouter();

    console.log("from chat room");
    const { user } = getUser();

    watch(user, () => {
      if (user.value == null) {
        // user is ref thats why we put
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>

<style scoped>
</style>