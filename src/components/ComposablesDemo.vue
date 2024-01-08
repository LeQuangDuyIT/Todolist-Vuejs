<script setup>
import { ref, watch } from 'vue';
import { useTodolist } from '../hooks/useTodolist';

const { todoList, editingId, create, toggleStatus, deleteTodo, toggleEditing } = useTodolist();

const inputValue = ref('');

const onSubmit = () => {
  if (inputValue.value.length === 0) return;
  if (!editingId.value) {
    const newTodo = {
      id: new Date().getTime(),
      title: inputValue.value,
      isDone: false
    };
    create(newTodo);
  } else {
    const index = todoList.value.findIndex(todo => todo.id === editingId.value);
    if (index === -1) return;
    todoList.value[index].title = inputValue.value;
    toggleEditing();
  }
  inputValue.value = '';
};

watch(editingId, () => {
  if (!editingId.value) {
    inputValue.value = '';
    return;
  }
  const index = todoList.value.findIndex(todo => todo.id === editingId.value);
  if (index === -1) return;
  inputValue.value = todoList.value[index].title;
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex gap-2">
    <input v-model="inputValue" />
    <button type="submit" class="text-blue-400">{{ !editingId ? 'Thêm' : 'Sửa' }}</button>
    <button type="reset" v-if="editingId" @click="toggleEditing()" class="text-red-400">Hủy</button>
  </form>
  <div v-for="todo in todoList">
    <div class="flex justify-between">
      <h4 :class="{ 'text-red-500 italic': todo.isDone }">{{ todo.title }}</h4>
      <div class="flex gap-2">
        <button @click="toggleStatus(todo.id)">Xong</button>
        <button @click="toggleEditing(todo.id)">Sửa</button>
        <button @click="deleteTodo(todo.id)">Xóa</button>
      </div>
    </div>
  </div>
</template>
