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
  const { fullName, fName, image } = await getUserName();
  return (
    <section>
      <h2>Account</h2>
      <h3>Welcome {fullName}</h3>
      {image && (
        <Image src={image} alt={fullName as string} width={200} height={200} />
      )}
    </section>
  );
};

export default AccountPage;
