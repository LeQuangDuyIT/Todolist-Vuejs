<!-- <script setup>
import { ref, watch, watchEffect } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// const props = defineProps({
//   todoList: Object,
//   editingId: Object,
//   handleAddTodo: Function
// });
const props = defineProps(['todoList', 'editingTodo', 'handleAddTodo']);
const { todoList, handleAddTodo, editingTodo } = props;

const emit = defineEmits(['handleUpdateTodo']);
const inputValue = ref('');

const onSubmitForm = e => {
  e.preventDefault();

  if (Object.values(editingTodo).length === 0) {
    const newTodo = {
      id: uuidv4(),
      title: inputValue.value,
      isDone: false
    };
    handleAddTodo(newTodo);
  } else {
    emit('handleUpdateTodo', [editingTodo, inputValue.value]);
    editingTodo = {};
  }
  inputValue.value = '';
};

watch(
  () => editingTodo,
  (prev, next) => {
    console.log('sdfsdfsd');
    console.log(prev, next);
    // if (Object.values(editingTodo).length === 0) return;
    // const index = todoList.findIndex(todo => todo.id === editingTodo.id);
    // console.log(index);
    // if (index === -1) return;
    // inputValue.value = editingTodo.title;
  },
  { deep: true }
);
</script> -->
<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  props: {
    todoList: {
      type: Array,
      default: () => []
    },
    editingTodo: {
      type: Object,
      default: () => ({})
    },
    handleAddTodo: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  // emits: {
  //   handleUpdateTodo
  //  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();

      if (Object.values(this.editingTodo).length === 0) {
        const newTodo = {
          id: uuidv4(),
          title: this.inputValue,
          isDone: false
        };
        this.handleAddTodo(newTodo);
      } else {
        // emit('handleUpdateTodo', [editingTodo, inputValue.value]);
        // this.inputValue = {};
      }
      this.inputValue = '';
    }
  },
  watch: {
    editingTodo(prev, newValue) {
      console.log(prev, newValue);
      this.inputValue = newValue.value.title;
    }
  }
};
</script>
<template>
  <form @submit="onSubmitForm" class="w-full flex items-center gap-2">
    <input
      v-model="inputValue"
      class="flex-grow p-2 border border-red-500 outline-none rounded-sm"
    />
    <button type="submit" class="py-2 px-4 border bg-red-400 text-white">
      <!-- {{ !editingId ? 'Thêm' : 'Chỉnh sửa' }} -->
      Thêm
    </button>
    {{ editingTodo }}
  </form>
</template>
