import { pinata } from "@/lib/pinata";
import Image from "next/image";

const getData = async () => {
  const url = await pinata.gateways
    .createSignedURL({
      cid: "bafybeidn62m4keavatfusnn344mvldjsg5vd2c7fr5xgpe2ucw4lmw77qe",
      expires: 500, // Number of seconds link is valid for
    })
    .optimizeImage({
      width: 500,
      height: 500,
      format: "webp",
      quality: 70,
    });

  return url;
};

export const HelloRoute = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Image src={data} alt="images" />
    </div>
  );
};

export default HelloRoute;
