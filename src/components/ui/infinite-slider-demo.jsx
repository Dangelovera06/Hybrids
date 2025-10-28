import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full bg-transparent" duration={60} durationOnHover={120}>
      <img
        src="/BEFORE AND AFTER/B6AB6AC7-CA17-4ED0-BD45-D68CFB61A74B.JPG"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/CC34745D-F5D6-4D9F-95DC-912F43A8A075.JPEG"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/D2A720F3-E37D-49AD-8A89-DB5EF686F60D.JPEG"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/Double Arch 1.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/BEFORE.png.PNG"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/BEFORE.zip - 1.PNG"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
    </InfiniteSlider>
  );
}

export function InfiniteSliderReverse() {
  return (
    <InfiniteSlider gap={24} reverse={false} className="w-full bg-transparent mt-6" duration={35} durationOnHover={70}>
      <img
        src="/BEFORE AND AFTER/Implant Dentures Upper and Lower.JPEG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/BEFORE.zip - 1.PNG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/82D0A581-51C2-4F96-BBD9-B179D38F3A6E.JPEG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/Double Arch 1.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/CC34745D-F5D6-4D9F-95DC-912F43A8A075.JPEG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/B6AB6AC7-CA17-4ED0-BD45-D68CFB61A74B.JPG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/BEFORE AND AFTER/D2A720F3-E37D-49AD-8A89-DB5EF686F60D.JPEG"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
    </InfiniteSlider>
  );
}
