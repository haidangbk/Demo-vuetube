<template>
  <div>
    <h1 class="has-text-danger">Dashboard</h1>
    <div class="tabs">
      <ul>
        <li
          v-for="(category, index) in categories"
          :key="index"
          :class="{'is-active':activeCategory === category.title }"
        >
          <a @click="setCategory(category.title)">{{category.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "dashboard",
  data() {
    return {
      categories: [],
      activeCategory: ""
    };
  },
  firestore() {
    return {
      categories: db.collection("categories")
    };
  },
  methods: {
    setCategory(title) {
      this.activeCategory = title;
    }
  }
};
</script>