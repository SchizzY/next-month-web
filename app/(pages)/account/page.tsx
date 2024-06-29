import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const getUserName = async () => {
  const user = await currentUser();

  return {
    fullName: user?.fullName,
    fName: user?.firstName,
    image: user?.imageUrl,
  };
};

const AccountPage = async () => {
  const { fullName, image } = await getUserName();
  return (
    <section>
      <h2>Account</h2>
      <h3>Welcome {fullName}</h3>
      {image && (
        <Image alt={fullName as string} height={200} src={image} width={200} />
      )}
    </section>
  );
};

export default AccountPage;
