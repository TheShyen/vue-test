export default {
  data() {},
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
};
