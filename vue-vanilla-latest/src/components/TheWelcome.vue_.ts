import { defineComponent } from "vue";

export default defineComponent({
	emits: [],
	setup() {
		return {
			openReadmeInEditor: () => fetch("/__open-in-editor?file=README.md")
		};
	}
});
