let React = {
  createElement: (tags, props, ...children) => {
    var element = { tags, props: { ...props, children } };
    console.log(element);
    return element;
  },
};
const a = (
  <div>
    <h1>Hello, Person</h1>
    <p>
      Sit est fugiat in eu. Pariatur officia Lorem nulla occaecat non. Minim id
      irure laboris sit ullamco aute proident amet. Laborum ea reprehenderit
      velit aliquip veniam laborum irure voluptate amet. Non consequat
      incididunt ea dolore anim cupidatat deserunt anim ut ullamco elit. Anim
      consequat duis consequat consectetur elit nulla ullamco eu.
    </p>
  </div>
);
