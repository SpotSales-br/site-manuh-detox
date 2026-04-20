import { site } from "@/data/site";

export function AnnouncementBar() {
  const { announcement } = site;
  return (
    <div className="bg-ink px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.5px] text-white">
      {announcement.text}{" "}
      <span className="font-semibold text-brand-light">
        {announcement.highlight}
      </span>
      <span className="mx-2 opacity-60">|</span>
      {announcement.tail}
    </div>
  );
}
