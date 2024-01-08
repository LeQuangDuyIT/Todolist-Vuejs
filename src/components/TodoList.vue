<script setup>
// defineProps({
//   todoList: Object,
//   handleCheckTodo: Function,
//   handleDeleteTodo: Function
// });
const props = defineProps(['todoList', 'handleCheckTodo', 'handleDeleteTodo']);
const emit = defineEmits(['onClickEdit']);
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div v-for="todo of todoList" class="flex justify-between">
      <h4 :class="{ 'text-red-400 italic': todo.isDone }">{{ todo.title }}</h4>
      <div class="flex items-center gap-2">
        <button @click="handleCheckTodo(todo.id)">Xong</button>
        <button @click="emit('onClickEdit', [todo])">Sửa</button>
        <button @click="handleDeleteTodo(todo.id)">Xóa</button>
      </div>
    </div>
  </div>
</template>
