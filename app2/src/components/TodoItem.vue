<script lang="ts">
import CtrlBase from "./TodoItem.vue_";
export default {
	extends: CtrlBase,
	emits: CtrlBase.emits,
	setup: CtrlBase.setup,
	components: {}
};
</script>

<template>
	<q-item clickable v-ripple @click="$emit('item-selected', item)">
		<q-item-section>
			<q-item-label>{{ item }}</q-item-label>
			<q-item-label caption>{{ someCaption }}</q-item-label>
		</q-item-section>
	</q-item>
</template>
