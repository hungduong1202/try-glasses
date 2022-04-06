import logo from "./logo.svg";
import "./App.css";
import CardJSX from "./Component/DemoComponent/CardJSX";
import CardFunc from "./Component/DemoComponent/CardFunc";
import BaiTapLayout from "./Component/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {
  return (
    <div className="App">
      {/* <CardFunc />
        <CardJSX /> */}
      {/* <BaiTapLayout /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <RenderWithMap/> */}
      <BaiTapThuKinh/>
    </div>
  );
}

export default App;