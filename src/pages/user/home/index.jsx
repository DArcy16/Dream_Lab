/** @format */

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
import { useBooksData, useUserBook } from "../../../hooks/useBooks";
import { useUserArticle } from "../../../hooks/useArticles";
import { useLoginBoxContext } from "../../../contexts/user/LoginBoxContext";
import { useNavigate } from "react-router-dom";
import {
	TOKEN_LOCAL_STORAGE,
	USER_DATA_LOCAL_STORAGE,
} from "../../../hooks/useUserAuth";
import ContentCardList from "../../../components/user/ContentCardList";
function Card({ imgSrc, title, body, redirectToLibrary }) {
	return (
		<div className="w-[250px] h-[320px] flex-none rounded shadow-lg p-4 pt-5 cursor-pointer">
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
	const { isError, isLoading, error, data: featuredBooks } = useUserBook("");
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
				<div className="text-white bg-dreamLabColor4 flex flex-col sm:flex-row justify-between items-center p-3 pb-0">
					<div className="mx-auto container pt-6 px-6 sm:px-12">
						<h2 className="text-3xl sm:text-5xl font-semibold text-center sm:text-left">
							နေ့စဉ်စာ တစ်အုပ်ဖတ်ပါ
						</h2>
						<div className="mt-8 sm:mt-12 text-base sm:text-xl w-full sm:w-4/5 leading-8 sm:leading-10 text-center sm:text-left">
							အဆီအနှစ်ထုတ်ထားတဲ့ Personal, Professional နဲ့ Business Development
							စာအုပ်များကို မြန်မာလို တစ်နေရာတည်းတွင် အချိန်မရွေး နေရာမရွေး
							ဖတ်ရှု့နိုင်ပါသည်။
						</div>
						<button
							className="w-full sm:w-1/2 btn-2 flex gap-2 items-center justify-center px-4 py-3 mt-6 sm:mt-8 mb-4 sm:mb-6"
							onClick={redirectToSubscription}
						>
							<RiVipCrownLine size={20} /> Subscribe to premium
						</button>
						<div className="flex justify-center sm:justify-start gap-8 mb-6 sm:mb-12">
							<img src={playStore} className="h-10" preview="playstore" />
							<img src={appleStore} className="h-10" preview="appleStore" />
						</div>
					</div>
					<div className="w-full h-full self-end">
						<img src={heroImg} className="w-full h-auto" />
					</div>
				</div>
			</div>
			<div class="container mx-auto flex flex-col md:flex-row md:gap-16 items-center mb-14">
				<img src={freeImg} class="w-full md:w-2/6 md:h-auto" />

				<div class="self-start md:self-center text-center md:text-left text-textColor4 md:w-3/5">
					<h3 class="font-semibold text-3xl md:text-3xl lg:text-3xl mb-4 md:mb-6">
						Dream Lab FREE
					</h3>
					<p class="text-lg md:text-xl lg:text-xl mb-4 md:mb-6">
						E-books are fun to read anywhere, anytime!
					</p>
					<div class="flex flex-col md:flex-row md:justify-between text-base lg:text-lg">
						<div class="flex flex-col mb-6 md:mb-0">
							<p class="flex items-center gap-4 mb-2 md:mb-4">
								<span
									style={{ background: "rgba(0, 190, 255, 0.3)" }}
									class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
								>
									<RiBook2Fill class="text-dreamLabColor1" size={21} />
								</span>
								Free Books
							</p>

							<p class="flex items-center gap-4">
								<span
									style={{ background: "rgba(0, 190, 255, 0.3)" }}
									class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
								>
									<IoDocumentText class="text-dreamLabColor1" size={21} />
								</span>
								Free Articles
							</p>
						</div>
						<div class="flex flex-col">
							<p class="flex items-center gap-4 mb-2 md:mb-4">
								<span
									style={{ background: "rgba(0, 190, 255, 0.3)" }}
									class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
								>
									<RiHeadphoneFill class="text-dreamLabColor1" size={21} />
								</span>
								Free Podcasts
							</p>
							<p class="flex items-center gap-4">
								<span
									style={{ background: "rgba(0, 190, 255, 0.3)" }}
									class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
								>
									<MdOutlineVideoSettings
										class="text-dreamLabColor1"
										size={21}
									/>
								</span>
								Free Videos
							</p>
						</div>
					</div>
					<button class="btn-1 mt-6 md:mt-10 py-3 md:py-4 px-6 md:px-8 w-1/2 md:w-auto flex items-center justify-center gap-2">
						Discover More <CgArrowLongRight size={23} />
					</button>
				</div>
			</div>
			<section className="container mx-auto mb-14 px-4 md:px-0">
				<h3 className="text-center text-textColor4 text-3xl font-semibold mb-8 md:mb-12">
					Featured Books
				</h3>
				{/* <div className="flex flex-col md:flex-row md:overflow-hidden md:overflow-x-auto [&::-webkit-scrollbar]:hidden  md:items-center md:justify-start py-4 gap-4 md:gap-8">
          {featuredBooks?.items?.map((book) => (
            <Card
              imgSrc={book?.mainImage}
              title={book?.title}
              body={book?.shortDesc}
              className="mb-4 md:mb-0 w-full md:w-auto"
            />
          ))}
        </div> */}
				<ContentCardList data={featuredBooks?.items} type="book" isHome />
			</section>

			<section
				style={{ background: "rgba(0, 215, 255, 0.1)" }}
				className="py-6 md:py-12 mb-6 md:mb-14"
			>
				<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center container mx-auto">
					<div className="w-full md:w-1/2">
						<img src={dreamLab} className="w-1/2 md:w-full" />
					</div>
					<div className="self-start w-full">
						<h3 className="text-dreamLabColor4 text-xl md:text-3xl font-semibold mb-3 md:mb-6">
							Why Choose DreamLab
						</h3>
						<ul className="list-disc leading-10 ml-4 text-dreamLabColor4">
							<li>
								Dreamlab ဆိုတာကေတာ့ ကမ္ဘာကျော် personal, professional and
								business development စာအုပ်တွေကို "မြန်မာလို" ဖတ်ရှုနိုင်အောင်
								အနှစ်ချုပ်ထားသည့် website တစ်ခုဖြစ်ပါတယ်။
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
			<section className="container mx-auto mb-14 px-4 sm:px-8 lg:px-12">
				<div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
					<h3 className="text-textColor4 text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">
						New Released Books
					</h3>
					<button
						className="btn-1 py-2 px-3 text-sm"
						onClick={redirectToBookLibrary}
					>
						VIEW MORE
					</button>
				</div>
				{/* <div className="flex flex-wrap gap-4 sm:gap-8">
					{featuredBooks?.items?.map((book) => (
						<Card
							key={book?.id}
							imgSrc={book?.mainImage}
							title={book?.title}
							body={book?.shortDesc}
						/>
					))}
				</div> */}
				<ContentCardList data={featuredBooks?.items} type="book" isHome />
			</section>

			<section className="container mx-auto mb-14">
				<div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
					<h3 className="text-textColor4 text-3xl font-semibold mb-4 md:mb-0">
						New Released Articles
					</h3>
					<button
						className="btn-1 py-2 px-3 text-sm"
						onClick={redirectToArticleLibrary}
					>
						VIEW MORE
					</button>
				</div>
				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{newArticles?.items?.map((article) => (
						<Card
							imgSrc={article?.mainImage}
							title={article?.title}
							body={article?.shortDesc}
						/>
					))}
				</div> */}
				<ContentCardList data={newArticles?.items} type="article" isHome />
			</section>
		</div>
	);
};

export default index;
