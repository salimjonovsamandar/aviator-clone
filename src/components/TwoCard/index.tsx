import image1 from "../../assets/cardimg1.png";
import image2 from "../../assets/cardimg2.png";

function index() {
  return (
    <div>
      <div className="flex Item-center  gap-x-4 cursor-pointer">
        <img style={{ width: "265px", height: "350px" }} src={image1} alt="" />
        <img style={{ width: "265px", height: "350px" }} src={image2} alt="" />
      </div>
    </div>
  );
}

export default index;
