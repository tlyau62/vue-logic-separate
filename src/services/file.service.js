export const createFile = (id) => console.log("file created: " + id);

export const withCreateFile = (Component) => ({
  functional: true,
  render(h, { data, children, props }) {
    return (
      <Component
        onClick={() => props.fileId && createFile(props.fileId)}
        {...data}
      >
        {children}
      </Component>
    );
  },
});
