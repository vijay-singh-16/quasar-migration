import { defineComponent, ref } from "vue";

export default defineComponent({
	emits: [],

	setup() {
		const selectedItem = ref("None");
		const todoItems = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 5"];

		return {
			selectedItem,
			todoItems
		};
	}
});
