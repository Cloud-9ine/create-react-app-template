import Results from "./Results";

const Button = ({type, input, onClick}) => {
  
  return (
    <button
      className={input == "0" ? `${type} extended` : type}
      style={{
        backgroundColor: `${type === "number" ? "#807c7c86" : "orange"}`,
      }}
      onClick={onClick}
    >
      {input}
    </button>
  );
}

export default Button