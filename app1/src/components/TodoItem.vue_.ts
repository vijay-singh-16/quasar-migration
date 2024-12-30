import { defineComponent, ref } from "vue";

export default defineComponent({
	emits: ["item-selected"],

	props: {
		item: {
			type: String,
			required: true
		}
	},

	setup() {
		const someCaption = ref("Some caption");
		return {
			someCaption
		};
	}
});
