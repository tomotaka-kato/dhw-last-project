interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <main className={prop.className}>
    <h1>グラフ</h1>
  </main>
);

export default render;
