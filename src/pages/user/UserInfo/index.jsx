import React, { useState } from "react";
import * as yup from "yup";
import InputForm from "../../../components/form/InputForm";
import { useUpdateUserInfo, useUserData } from "../../../hooks/useUserInfo";
import { set, useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { USER_DATA_LOCAL_STORAGE } from "../../../hooks/useUserAuth";

const UpdateUserDataInfoSchema = yup.object({
  name: yup.string(),
  email: yup.string(),
  phoneNumber: yup.string(),
  dob: yup.date(),
  
});
const index = () => {
  const [icon, setIcon] = useState();
  const updateUserInfoMutation = useUpdateUserInfo();
  const [user, setUser] = useState([])
  const {
    
    data: userData,
    isSuccess: isUserDataUpdateSuccess,
    refetch,
  } = useUserData(user.id);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(UpdateUserDataInfoSchema),
  });

  const onSubmit = (data) => {
    updateUserInfoMutation.mutate({
      ...data,
      name: userData.displayName,
      id: userData.id,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      dob: userData.dob,
      profileImage: userData.profileImage,
    });
    
    console.log(user);
    
  };

  useEffect(() => {
    if (isUserDataUpdateSuccess) {
      setValue("name", userData.displayName);
      setValue("email", userData.email);
      setValue("phoneNumber", userData.phoneNumber);
      setValue("dob", userData.dob);
      setUser(JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE)))
      setIcon(userData.profileImage)
    }
  }, [isUserDataUpdateSuccess]);

  useEffect(() => {
    if (updateUserInfoMutation.isSuccess) {
      refetch();
    }
  }, [updateUserInfoMutation.isSuccess]);

  return (
    <div className="admin-outlet-container">
      <div className="flex justify-center ">
        <div className="w-3/5">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              id="icon"
              type="file"
              accept="image/*"
              icon={icon}
              setIcon={setIcon}
              articlePage
              isEdit
            />
            <InputForm
              id="name"
              type="text"
              placeholder="Type your full name"
              label="full name"
              register={register}
              errors={errors}
            />

            <InputForm
              id="email"
              type="text"
              placeholder="Type your email"
              label="Email"
              register={register}
              errors={errors}
            />
            <InputForm
              id="phoneNumber"
              type="number"
              placeholder="Type your phobe number"
              label="phone number"
              register={register}
              errors={errors}
            />
            <InputForm
              id="dob"
              type="date"
              placeholder="Type Plan Name"
              label="date of birth"
              register={register}
              errors={errors}
            />
            {updateUserInfoMutation.isError && (
              <p className="text-red-600">
                {updateUserInfoMutation.error.message}
              </p>
            )}

            <button className="btn-2 w-full py-2 px-3 mt-4" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
