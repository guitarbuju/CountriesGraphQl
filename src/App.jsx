import "./App.css";
import CountrySelect from "./components/CountrySelect";
import portrait from "./assets/portrait.jpg";

function App() {
  return (
    <>
      <div className="w-full top-0 flex justify-center items-center p-4">
        <h1 className="text-2xl md:text-4xl text-gray-400">PRUEBA TECNICA</h1>
      </div>

      <div className="flex gap-7 justify-center items-center p-2">
        <div className="hidden md:flex md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[600px] " >
          <img src={portrait} />
        </div>
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[400px] bg-[#181818] rounded-xl flex items-center justify-center">
          <CountrySelect />
        </div>
      </div>
    </>
  );
}

export default App;
