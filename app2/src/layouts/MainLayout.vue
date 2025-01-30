<script lang="ts">
import CtrlBase from "./MainLayout.vue_";
export default { ...CtrlBase };
</script>

<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
