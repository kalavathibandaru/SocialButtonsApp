const Button = (props) => {
  const { text, styling } = props;
  return <button className={styling}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Social Buttons </h1>
    <div className="sub-container">
      <Button text="Like" styling="like-button" />
      <Button text="Comment" styling="comment-button" />
      <Button text="Share" styling="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
