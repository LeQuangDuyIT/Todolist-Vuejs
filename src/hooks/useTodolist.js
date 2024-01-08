import { ref } from 'vue';

export function useTodolist() {
  const todoList = ref([]);
  const editingId = ref(null);

  const create = todo => {
    todoList.value.push(todo);
  };

  const toggleStatus = id => {
    const index = todoList.value.findIndex(todo => todo.id === id);
    if (index === -1) return;
    todoList.value[index].isDone = !todoList.value[index].isDone;
  };

  const deleteTodo = id => {
    const updatedList = todoList.value.filter(todo => todo.id !== id);
    todoList.value = updatedList;
  };

  const toggleEditing = id => {
    if (id) {
      editingId.value = id;
    } else {
      editingId.value = null;
    }
  };

  return { todoList, editingId, create, toggleStatus, deleteTodo, toggleEditing };
}
