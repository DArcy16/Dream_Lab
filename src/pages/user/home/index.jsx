import React, { useEffect, useState } from "react";
import { RiVipCrownLine, RiBook2Fill, RiHeadphoneFill } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import playStore from "../../../assets/playstore.png";
import appleStore from "../../../assets/applestore.png";
import freeImg from "../../../assets/freeImage.png";
import dreamLab from "../../../assets/dreamLab.png";
import heroImg from "../../../assets/heroImg.png";
import { useBooksData } from "../../../hooks/useBooks";
import { useUserArticle } from "../../../hooks/useArticles";
import { useLoginBoxContext } from "../../../contexts/user/LoginBoxContext";
import { useNavigate } from "react-router-dom";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
} from "../../../hooks/useUserAuth";
function Card({ imgSrc, title, body, redirectToLibrary }) {
  return (
    <div className="w-[250px] h-[320px] rounded shadow-lg p-4 pt-5 cursor-pointer">
      <div className="flex items-center justify-center mb-3">
        <div className="w=[150px] h-[150px] mb-5">
          <img src={imgSrc} alt={title} className="w-full h-full" />
        </div>
      </div>
      <div>
        <div className="font-semibold textColor4 mb-2 leading-6">{title}</div>
        <p className="textColor3 text-sm">
          {body?.length > 0 ? body?.substring(0, 60) + "..." : "No description"}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm flex items-center gap-2 text-textColor3">
          <AiOutlineClockCircle />5 mins
        </span>
        <button className="text-dreamLabColor1 text-sm font-semibold rounded">
          View Now
        </button>
      </div>
    </div>
  );
}

const index = () => {
  const { isError, isLoading, error, data: featuredBooks } = useBooksData("");
  const { data: newArticles } = useUserArticle("");
  const { setShow } = useLoginBoxContext();
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setIsLogin(true);
      setUser(JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE)));
    } else {
      setIsLogin(false);
      setUser({});
    }
  }, [token]);

  const redirectToSubscription = () => {
    if (isLogin) {
      navigate("/pricing");
    } else {
      setShow(true);
    }
  };
  const redirectToBookLibrary = () => {
    console.log("here book");
    if (isLogin) {
      navigate("/library/book");
    } else {
      setShow(true);
    }
  };
  const redirectToArticleLibrary = () => {
    console.log("here article");
    if (isLogin) {
      navigate("/library/article");
    } else {
      setShow(true);
    }
  };
  return (
    <div>
      <div className="text-white bg-dreamLabColor4 flex justify-between items-center p-3 pb-0 mb-14">
        <div className="mx-auto container pt-6 px-12">
          <h2 className="text-5xl font-semibold">နေ့စဉ်စာ တစ်အုပ်ဖတ်ပါ</h2>
          <div className="mt-12 text-xl w-[660px] leading-10">
            အဆီအနှစ်ထုတ်ထားတဲ့ Personal, Professional နဲ့ Business Development
            စာအုပ်များကို မြန်မာလို တစ်နေရာတည်းတွင် အချိန်မရွေး နေရာမရွေး
            ဖတ်ရှု့နိုင်ပါသည်။
          </div>
          <button
            className="w-1/2 btn-2 flex gap-2 items-center justify-center px-4 py-3 mt-8 mb-6"
            onClick={redirectToSubscription}
          >
            {" "}
            <RiVipCrownLine size={20} /> Subscribe to premium
          </button>
          <div className="flex gap-12 mb-12">
            <img src={playStore} preview="playstore" />
            <img src={appleStore} preview="appleStore" />
          </div>
        </div>
        <div className="w-full h-full self-end">
          <img src={heroImg} />
        </div>
      </div>
      <div className="container mx-auto flex gap-44 items-center mb-14">
        <img src={freeImg} width={350} height={250} />

        <div className="self-start text-textColor4">
          <h3 className="font-semibold text-3xl">Dream Lab FREE</h3>
          <p className="text-[22px] mt-4 mb-6">
            E-books are fun to read anywhere, anytime!
          </p>
          <div className="flex justify-between text-lg">
            <div className="flex flex-col">
              <p className="flex items-center gap-4 mb-4">
                <span
                  style={{ background: "rgba(0, 190, 255, 0.3)" }}
                  className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center"
                >
                  <RiBook2Fill className="text-dreamLabColor1" size={21} />
                </span>
                Free Books
              </p>

              <p className="flex items-center gap-4">
                <span
                  style={{ background: "rgba(0, 190, 255, 0.3)" }}
                  className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center"
                >
                  <IoDocumentText className="text-dreamLabColor1" size={21} />
                </span>
                Free Articles
              </p>
            </div>
            <div className="flex flex-col">
              <p className="flex items-center gap-4 mb-4">
                <span
                  style={{ background: "rgba(0, 190, 255, 0.3)" }}
                  className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center"
                >
                  <RiHeadphoneFill className="text-dreamLabColor1" size={21} />
                </span>
                Free Podcasts
              </p>
              <p className="flex items-center gap-4">
                <span
                  style={{ background: "rgba(0, 190, 255, 0.3)" }}
                  className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center"
                >
                  <MdOutlineVideoSettings
                    className="text-dreamLabColor1"
                    size={21}
                  />
                </span>
                Free Videos
              </p>
            </div>
          </div>
          <button className="btn-1 mt-8 py-4 px-8 w-1/2 flex items-center justify-center gap-4">
            Discover More <CgArrowLongRight size={23} />
          </button>
        </div>
      </div>
      <section className="container mx-auto mb-14">
        <h3 className="text-center text-textColor4 text-3xl font-semibold mb-12">
          Featured Books
        </h3>
        <div className="flex items-center gap-8 flex-wrap">
          {featuredBooks?.items?.map((book) => (
            <Card
              imgSrc={book?.mainImage}
              title={book?.title}
              body={book?.shortDesc}
            />
          ))}
        </div>
      </section>
      <section
        style={{ background: "rgba(0, 215, 255, 0.1)" }}
        className="py-12 mb-14"
      >
        <div className="flex gap-20 items-center container mx-auto">
          <div>
            <img src={dreamLab} width={420} height={200} />
          </div>
          <div className="self-start">
            <h3 className="text-dreamLabColor4 text-3xl font-semibold mb-6">
              Why Choose DreamLab
            </h3>
            <ul className="list-disc leading-10 ml-4 text-dreamLabColor4">
              <li>
                Dreamlab ဆိုတာကေတာ့ ကမ္ဘာကျော် personal, professional and
                business development စာအုပ်််််််တွေကို "မြန်မာလို"
                ဖတ်ရှုနိုင်အောင် အနှစ်ချုပ်ထားသည့် website တစ်ခုဖြစ်ပါတယ်။{" "}
              </li>
              <li>
                နေ့စဥ် ကမ္ဘာကျော်စာအုပ်များကို မြန်မာလို အဆီအနှစ်ထုတ်
                အနှစ်ချုပ်ရေးပေးထားပါတယ်။
              </li>
              <li>
                ဖုန်းနဲ့အင်တာနက်ရှိရင် စာအုပ်တွေ သယ်သွားစရာမလိုတော့ဘူးပေါ့။
              </li>
              <li>
                1st June 2020 ကစတင်ခဲ့ပါသည်။ တစ်ရက်တစ်အုပ် စာအုပ်တွေအပြင်
                နေ့စဉ်တင်််််််််ဆက်ပေးနေတဲ့ စာအုပ်အသစ်တွေကိုလည်း
                ဖတ်ရှုနိုင်မှာဖြစ်ပါတယ်။ ဒါကြောင့် နေ့စဥ် ကိုယ့်ရဲ့ဦးနှောက်မှာ
                ရင်းနှီးမြှုပ်နှံဖို့ အခုပဲ Dream Lab မှာ Subscribe
                လုပ်လိုက်ပါနော်။
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-14">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-textColor4 text-3xl font-semibold">
            New Released Books
          </h3>
          <button
            className="btn-1 py-2 px-3 text-sm"
            onClick={redirectToBookLibrary}
          >
            VEIW MORE
          </button>
        </div>
        <div className="flex items-center gap-8 flex-wrap">
          {featuredBooks?.items?.map((book) => (
            <Card
              imgSrc={book?.mainImage}
              title={book?.title}
              body={book?.shortDesc}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto mb-14">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-textColor4 text-3xl font-semibold">
            New Released Articles
          </h3>
          <button
            className="btn-1 py-2 px-3 text-sm"
            onClick={redirectToArticleLibrary}
          >
            VEIW MORE
          </button>
        </div>
        <div className="flex items-center gap-8 flex-wrap">
          {newArticles?.items?.map((article) => (
            <Card
              imgSrc={article?.mainImage}
              title={article?.title}
              body={article?.shortDesc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default index;
