import React, { useState } from "react";
import { RiVipCrownLine } from "react-icons/ri";
import CheckIcon from "../../../assets/checkMark";
import CrownIcon from "../../../assets/crownIcon";
import PlanCard from "../../../components/user/PlanCard";
import { useSubscriptions } from "../../../hooks/useSubscription";
const index = () => {
  const { isLoading, isError, error, data, refetch } = useSubscriptions();

  return (
    <div>
      <div className="flex flex-col bg-dreamLabColor4 p-14 text-white">
        <div className="flex self-end gap-8">
          <div>FREE</div>
          <div>PREMIUM</div>
        </div>

        <div className="flex justify-between mt-3 items-center">
          <div
            className="bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 pt-12 px-10 pb-8 ml-3 w-[480px] rounded-xl relative"
            style={{
              backgroundImage:
                "linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
            }}
          >
            <div className="absolute top-[-65px] left-[-3.2rem]">
              <CrownIcon />
            </div>

            <h1 className="text-4xl mb-12">Premium Feature</h1>
            <div>
              <p className="text-xl mb-4 flex gap-5 items-center">
                <span>
                  <RiVipCrownLine />
                </span>
                <span>Go premium and get the best of books</span>
              </p>
              <p className="text-xl flex gap-5 items-center">
                <span>
                  <RiVipCrownLine />{" "}
                </span>
                <span>
                  မည်သည့် plan မဆို စိတ်တိုင်းမကျပါက တစ်ပတ်အတွင်း 100% refund
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="mb-0">Free Books, Articles, Podcasts, Video</p>
            <p className="mb-0">Unlimited Books</p>
            <p className="mb-0">Unlimited Articles</p>
            <p className="mb-0">Unlimited Podcasts</p>
            <p className="mb-0">Unlimited Videos</p>
          </div>
          <div className="flex w-[150px] self-start mt-3">
            <div className="flex flex-col items-center justify-center gap-8 mr-16 mt-5">
              <span>
                <CheckIcon />
              </span>
              <span className="mt-1">-</span>
              <span>-</span>
              <span>-</span>
              <span>-</span>
            </div>

            <div className="flex flex-col justify-center gap-10 mt-4">
              <span>
                <CheckIcon />
              </span>
              <span>
                <CheckIcon />
              </span>
              <span>
                <CheckIcon />
              </span>
              <span>
                <CheckIcon />
              </span>
              <span>
                <CheckIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-16">
        <h3 className="text-center mt-10 mb-8 text-4xl font-semibold">
          Choose Your MemberShip
        </h3>
        <div className="flex gap-6 flex-wrap items-center justify-center ">
          {data?.map((plan) => (
            <PlanCard key={plan?.id} planDetail={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
