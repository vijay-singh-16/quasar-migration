<script lang="ts">
import CtrlBase from "./MainLayout.vue_";
export default {
	extends: CtrlBase,
	emits: CtrlBase.emits,
	setup: CtrlBase.setup,
	components: {}
};
</script>

<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
