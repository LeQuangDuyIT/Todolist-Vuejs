<script setup>
import { ref } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import ComposablesDemo from './components/ComposablesDemo.vue';

const todoList = ref([]);
const editingTodo = ref({});

const handleAddTodo = newTodo => {
  todoList.value.push(newTodo);
};

const handleUpdateTodo = (id, newTitle) => {
  const index = todoList.value.findIndex(todo => todo.id === id);
  if (index === -1) return;
  todoList.value[index].title = newTitle;
};

const handleCheckTodo = id => {
  const index = todoList.value.findIndex(todo => todo.id === id);
  if (index === -1) return;
  todoList.value[index].isDone = !todoList.value[index].isDone;
};

const handleDeleteTodo = id => {
  const index = todoList.value.findIndex(todo => todo.id === id);
  if (index === -1) return;
  todoList.value.splice(index, 1);
};

const handleSetEditingTodo = payload => {
  const [data] = payload;
  const index = todoList.value.findIndex(todo => todo.id === data.id);
  if (index === -1) return;
  editingTodo.value = data;
};
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center bg-red-200">
    <div class="w-[400px] h-[600px] p-4 border rounded-md bg-white">
      <h1 class="font-bold text-red-500">Todo list</h1>
      <TodoForm
        :todoList="todoList"
        :editingTodo="editingTodo"
        :handleAddTodo="handleAddTodo"
        @handleUpdateTodo="handleUpdateTodo"
      />
      <TodoList
        :todoList="todoList"
        :handleCheckTodo="handleCheckTodo"
        :handleDeleteTodo="handleDeleteTodo"
        @onClickEdit="handleSetEditingTodo"
      />
    </div>
    <div>
      <ComposablesDemo />
    </div>
  </div>
</template>
