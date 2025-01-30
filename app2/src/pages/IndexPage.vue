<script lang="ts">
import CtrlBase from "./IndexPage.vue_";
import TodoItem from "src/components/TodoItem.vue";
export default { ...CtrlBase, components: { TodoItem } };
</script>

<template>
	<q-page>
		<h1>Todo List</h1>
		<div>Last Selected: {{ selectedItem }}</div>
		<q-list bordered separator>
			<TodoItem v-for="(todoItem, i) in todoItems" :item="todoItem" :key="i" @item-selected="selectedItem = $event" />
		</q-list>
	</q-page>
</template>
