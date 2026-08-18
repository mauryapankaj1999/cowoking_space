import  react from "react";

export default function CorworkingSpaceCaption({ cityName }: { cityName: string }) {
  return (
    <div className="bg-primary py-10">
      <div className="mx-auto max-w-7xl">
        <h3 className="font-financierDisplay text-[3rem] font-medium text-white">Coworking Space In {cityName}</h3>
          <p className="text-white/90 font-normal text-[14px]">Verified spaces in {cityName} with all-in pricing, real photos and same-day tour requests.
          </p>
      </div>
    </div>
  );
}