export default function () {
  return {
    pre(state) {
      state.set("helperGenerator", (name) => state.addImport(state.opts.module, name, name));
    }
  };
}
