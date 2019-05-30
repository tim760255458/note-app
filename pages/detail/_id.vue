<template>
  <v-layout justify-center row warp>
    <v-flex xs12 sm8 md8 xl8>
      <v-card hover>
        <v-card-title>{{ item.title }} -- {{ $route.params.id }}</v-card-title>
        <v-card-text>{{ item.summary }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <span class="grey--text text--darken-1 mr-4">{{
            item.release_time
          }}</span>
          <span class="grey--text text--darken-1 mr-2">{{ item.author }}</span>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      item: {
        id: 1,
        title: 'this is title',
        summary: 'this is a page for test title show',
        author: 'buer',
        release_time: '2019-04-04 15:18:00'
      }
    }
  }
}
</script>
