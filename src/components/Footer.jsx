import OneWinLogo from "../assets/1win-normal.svg";
import Apple from "../assets/Apple_logo_grey.svg.png";
import Android from "../assets/c6ab02-android-logomark.svg";
import Instagram from "../assets/Instagram_icon.png";
import Telegram from "../assets/telegram.png";
import Youtobe from "../assets/youtobe.png";
import Wk from "../assets/wk.png";
import Thread from "../assets/thread.png";
import UEFA from "../assets/uefa.093dd4fef.svg";
import UFS from "../assets/ufc.0ef6261ee.svg";
import WTA from "../assets/wta.c6d5e2ef3.svg";
import FIBA from "../assets/fiba.4b405b699.svg";
import FIFA from "../assets/fifa.604717ea7.svg";
import ITF from "../assets/itf.9b1402c42.svg";
import ATP from "../assets/atp.e87cf2801.svg";
import NNL from "../assets/nhl.9b1a4945d.svg";
import Iphoneimg from "../assets/iphone-img.svg";
import TopUi from "../assets/top-svgrepo-com.svg";
import enFlag from "../assets/en-flag.svg";
import Untited from "../assets/Untitled.png";
import Bookmark from "../assets/bookmaker-rating.6f4fa6b59.svg";
import King from "../assets/betraja.5cf6f15c0-75.png";
import AppRoyal from "../assets/casino-mentor.f6b6387ac-172.png";
import Best from "../assets/best-bitcoin-casino.9c1716b1a-50.png";
import Criced from "../assets/cricket-betting-guru.cfe7d4265-500.png";
function Footer() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="px-10 mt-6">
        <div className="mt-2 items-center flex gap-4">
          <img src={OneWinLogo} alt="1win logo" width={70} />
          <div className="border w-full border-gray-700 mt-2"></div>
        </div>
        <div className="flex  mt-8 text-[12px] flex-wrap sm:justify-center ">
          <div className="text-white w-[180px] text-[10px]">
            <p className="text-[14px] font-[600]">24/7 support</p>
            <p className=" text-gray-500 mt-2 w-5/6">
              Contact us if you have any more questions
            </p>
          </div>
          <div className="text-gray-600  text-[15px] font-[600] space-y-1">
            <p className=" pb-8 text-[12px]">SUPPORT CONTACTS</p>
            <p className="cursor-pointer">Technical support</p>
            <p className="cursor-pointer">Security service</p>
            <p className="cursor-pointer">Commercial offers</p>
            <p className="cursor-pointer">Affiliate program</p>
          </div>
          <div className="text-white font-[600] pt-14 text-[15px] ml-8 space-y-1">
            <p className="cursor-pointer">support@1win.xyz</p>
            <p className="cursor-pointer">security@1win.xyz</p>
            <p className="cursor-pointer">business@1win.xyz</p>
            <p className="cursor-pointer">partners@1win.pro</p>
          </div>
          <div className="text-white text-[15px] ml-14 space-y-1">
            <p className=" text-gray-600 font-[600] pb-8 text-[12px]">
              {" "}
              INFORMATION
            </p>
            <p className="cursor-pointer">Rules</p>
            <p className="cursor-pointer">Promotions and bonuses</p>
            <p className="cursor-pointer">Mobile version</p>
            <p className="cursor-pointer">Affiliate program</p>
          </div>
          <div className="text-white text-[15px] ml-8  space-y-1 ">
            <p className="text-gray-700 font-[600] pb-8 text-[12px]">
              {" "}
              CATEGORIES
            </p>
            <p className="cursor-pointer">Live</p>
            <p className="cursor-pointer">Sports</p>
            <p className="cursor-pointer"> Promotions</p>
            <p className="cursor-pointer">Liva-games </p>
          </div>
          <div className="text-white pt-12 text-[15px] ml-8">
            <p className="cursor-pointer">Poker</p>
            <p className="cursor-pointer">Casino</p>
          </div>
          <div className="flex flex-col gap-3 mt-12 ml-60">
            <div className="flex border  p-2 rounded-xl gap-3 cursor-pointer">
              <img width={25} src={Apple} alt="" />
              <div className="text-white text-[10px] w-[80px]">
                <p className="text-gray-400">App</p>
                <p className="font-bold">for iOS</p>
              </div>
              <div className="bg-gray-600 w-[15px] h-[15px] flex justify-center items-center rounded-2xl ml-6 mt-3">
                <span className="text-white text-[9px]">?</span>
              </div>
            </div>
            <div className="flex border  p-2 rounded-xl gap-3 cursor-pointer">
              <img width={25} src={Android} alt="" />
              <div className="text-white text-[10px] w-[80px]">
                <p className="text-gray-400">App</p>
                <p className="font-bold">for Android</p>
              </div>
              <div className="bg-gray-600 w-[15px] h-[15px] flex justify-center items-center rounded-2xl ml-6 mt-3">
                <span className="text-white text-[9px]">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 mt-16">
        <div className="flex sm:justify-center   md:justify-between flex-wrap  items-center py-3 border-t  border-gray-700">
          <div className="flex gap-4 flex-wrap sm:justify-center  ">
            <img
              className="w-10 h-8 object-cover transform transition-transform duration-300 scale-100 cursor-pointer rounded-md hover:scale-110"
              src={Telegram}
              alt="Telegram"
            />
            <img
              className="w-10 h-8 object-cover transform transition-transform duration-300 scale-100 cursor-pointer rounded-md hover:scale-110"
              src={Youtobe}
              alt="YouTube"
            />
            <img
              className="w-8 h-8 object-cover transform transition-transform duration-300 scale-100 cursor-pointer rounded-md hover:scale-110"
              src={Wk}
              alt="VK"
            />
            <img
              className="w-8 h-8 object-cover transform transition-transform duration-300 scale-100 cursor-pointer rounded-md hover:scale-110"
              src={Instagram}
              alt="Instagram"
            />
            <img
              className="w-8 h-8 object-cover transform transition-transform duration-300 scale-100 cursor-pointer rounded-md hover:scale-110"
              src={Thread}
              alt="Thread"
            />
          </div>
          <div className="flex gap-12 flex-wrap sm:justify-center sm:mt-3">
            <img
              className="cursor-pointer"
              height={10}
              src={UEFA}
              width={65}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={UFS}
              width={65}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={WTA}
              width={65}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={FIBA}
              width={55}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={NNL}
              width={25}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={ATP}
              width={25}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={ITF}
              width={65}
              alt=""
            />
            <img
              className="cursor-pointer"
              height={10}
              src={FIFA}
              width={65}
              alt=""
            />
          </div>
          <div className="flex gap-4 sm:mt-2 md:mt-1">
            <small className="bg-[#1e263d] w-12  h-8 rounded-md flex items-center justify-center">
              <small className="text-white text-[11px] mr-1 font-bold">
                EN
              </small>
              <img src={enFlag} className="w-5 h-5" />
            </small>
            <small className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center">
              <img src={Iphoneimg} className="w-6 h-6" />
            </small>
            <small
              onClick={scrollTop}
              className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer"
            >
              <img src={TopUi} className="w-6 h-6" />
            </small>
          </div>
        </div>
      </div>
      <div className="px-4">
        <img src={Untited} className="w-full " alt="" />
      </div>
      <div className="px-10 flex mt-4 flex-wrap justify-between">
        <p className="text-[10px] text-gray-500 font-bold">© 2024 1WIN.</p>
        <div className="flex gap-4 items-center">
          <img src={Bookmark} width={40} alt="" height={15} />
          <img src={King} width={35} alt="" height={15} />
          <img src={AppRoyal} width={150} height={15} alt="" />
          <img src={Best} width={30} height={15} alt="" />
          <img src={Criced} width={25} alt="" height={15} />
          <span className="text-gray-400 font-bold text-xl">| 18 +</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
