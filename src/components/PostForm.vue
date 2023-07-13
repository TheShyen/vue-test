<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" v-focus placeholder="Название" type="text" />
    <my-input v-model="post.body" placeholder="Описание" type="text" />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Создать
    </my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("createPost", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>