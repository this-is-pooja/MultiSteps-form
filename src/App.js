import MultiplePages from "./Components/Multistep";
import Lottie from "react-lottie";
import FormAnimation from "./helpers/details_Animation.json";

function App() {

  const Title = {
    margin: "2rem 0 2rem 0",
    fontSize: "2.5rem",
    fontWeight: "500",
    color: "#536471",
  }
  const LottieAnimation={
    marginRight: "100px"
  }
  const Animation = {
    loop: true,
    autoplay: true,
    animationData: FormAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "1000px",
          textAlign: "center"
        }}
      >
        <div style={Title}>Multi Steps Form</div>
        <MultiplePages />
      </div>
      <div style={LottieAnimation}>
        <Lottie
          options={Animation}
          height={620}
          width={300}
        />
      </div>
    </div>
  );
}

export default App;

