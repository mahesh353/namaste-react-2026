import TitleComponent from "./Title";
const number = 10;
const HeadingComponent = () => {
  return (
    <div id="container">
      {number}
      {TitleComponent()}
      <TitleComponent />
      <h1>This is a Heading Component</h1>
    </div>
  );
};

export default HeadingComponent;
