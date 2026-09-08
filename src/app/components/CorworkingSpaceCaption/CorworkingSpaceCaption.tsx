import  react from "react";

export default function CorworkingSpaceCaption({ cityName }: { cityName: string }) {
  return (
    <div className="bg-primary py-10 lg:px-0 px-4">
      <div className="mx-auto max-w-7xl">
        <h3 className="font-financierDisplay lg:text-[3rem] text-[1.5rem] font-medium text-white">Coworking Space In {cityName}</h3>
          <p className="text-white/90 font-normal lg:text-[14px] text-[11px] lg:mt-0 mt-3">Verified spaces in {cityName} with all-in pricing, real photos and same-day tour requests.
          </p>
      </div>
    </div>
  );
}