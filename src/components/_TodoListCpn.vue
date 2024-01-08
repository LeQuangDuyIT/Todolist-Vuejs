<script setup>
import { useTodolist } from '../hooks/useTodolist';

const { todoList } = useTodolist();
</script>

<template>
  <div v-for="todo in todoList">
    <h4>{{ todo }}</h4>
  </div>
</template>
