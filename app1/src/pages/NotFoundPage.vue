<script lang="ts">
import CtrlBase from "./NotFoundPage.vue_";
export default {
	extends: CtrlBase,
	emits: CtrlBase.emits,
	setup: CtrlBase.setup,
	components: {}
};
</script>

<template>
	<div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
		<div>
			<div style="font-size: 30vh">404</div>
			<div class="text-h2" style="opacity:.4">Oops. Nothing here...</div>
			<q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="Go Home" no-caps />
		</div>
	</div>
</template>
