<script lang="ts">
import CtrlBase from "./TodoItem.vue_";
export default { ...CtrlBase };
</script>

<template>
	<q-item clickable v-ripple @click="$emit('item-selected', item)">
		<q-item-section>
			<q-item-label>{{ item }}</q-item-label>
			<q-item-label caption>{{ someCaption }}</q-item-label>
		</q-item-section>
	</q-item>
</template>
