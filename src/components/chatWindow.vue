<template>
  <div class="chat-window" id="c">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" ref="messages" class="messages">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="created-at">
          {{ doc.createdAt }}
        </span>
        <span class="name">
          {{ doc.name }}
        </span>
        <span class="message">
          {{ doc.message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import { watch } from "vue";

export default {
  setup() {
    const { error, documents } = getCollection("messages");
    watch(documents, () => {
      if (documents.value) {
        documents.value.forEach((doc) => {
          doc.createdAt = formatDistanceToNow(doc.createdAt.toDate());
        });
        console.log("Scroll TO ENd");
        console.log("scroll Function");
      }
    });

    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;

      console.log(messages.value.scrollTop);
      console.log(messages.value.scrollHeight);
    });
    return { error, documents, messages };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>