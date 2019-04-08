<template>
  <v-layout justify-center row warp>
    <v-flex xs12 sm8 md8 xl8>
      <v-card class="pa-4" hover>
        <v-form>
          <v-text-field clearable counter label="输入标题"></v-text-field>
          <v-textarea
            clearable
            counter
            outline
            no-resize
            rows="10"
            label="输入内容"
          ></v-textarea>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :loading="loading"
            round
            class="light-blue--text text--darken-3"
            @click="send"
          >
            发表<v-icon small dark class="ml-2">send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    send() {
      this.loading = true
      this.$toast.error('hello', 'world', {
        position: 'topRight'
      })
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
