import Layout from "@/components/Layout";

// Gear page — a curated personal list grouped by category
type GearItem = { name: string; tag: string };
type GearCategory = { label: string; items: GearItem[] };

const categories: GearCategory[] = [
  {
    label: "Backpacking",
    items: [
      { name: "Durston Kakwa 55", tag: "Pack" },
      { name: "Paria Outdoors Zion 2P", tag: "Shelter" },
      { name: "Paria Outdoors Double Pad", tag: "Sleep System" },
      { name: "Zenbivy Double Quilt System", tag: "Sleep System" },
    ],
  },
  {
    label: "EDC",
    items: [
      { name: "Ridge Wallet (Black)", tag: "Wallet" },
      { name: "Whoop", tag: "Fitness Tracker" },
      { name: "Civivi Vision FG", tag: "Knife" },
      { name: "Pilot G2", tag: "Pen" },
    ],
  },
  {
    label: "Videography",
    items: [
      { name: "Sony ZV-E10", tag: "Camera" },
      { name: "Sony 10-18mm OSS", tag: "Lens" },
      { name: "GoPro Hero 12", tag: "Action Cam" },
      { name: "Insta360 X4", tag: "360 Camera" },
      { name: "DJI Mini 4 Pro", tag: "Drone" },
      { name: "DJI Mic Mini", tag: "Audio" },
      { name: "Shure MV7+", tag: "Podcast Mic" },
      { name: "Amaran Pano 60c", tag: "Lighting" },
    ],
  },
  {
    label: "Travel",
    items: [
      { name: "Aer Travel Pack 3", tag: "Bag" },
      { name: "Peak Design Packing Cubes", tag: "Organization" },
      { name: "Aer Travel Kit 2", tag: "Toiletry Kit" },
    ],
  },
  {
    label: "Tech",
    items: [
      { name: "iPhone 15 Plus", tag: "Phone" },
      { name: "MacBook Pro M4", tag: "Computer" },
      { name: "MacBook Air M4", tag: "Computer" },
      { name: "iPad Pro", tag: "Tablet" },
      { name: "NiteCore NB20000", tag: "Power Bank" },
      { name: "Nuphy Air75", tag: "Keyboard" },
      { name: "Beyerdynamic DT 770 Pro X", tag: "Headphones" },
    ],
  },
  {
    label: "Want",
    items: [
      { name: "ULANZI JJ06 GlideGo Tripod", tag: "Tripod" },
      { name: "Sigma 17-40mm f/1.8 ART", tag: "Lens" },
      { name: "Sony a6700", tag: "Camera" },
      { name: "Dell U2725QE", tag: "Monitor" },
      { name: "Aer Travel Pack 4", tag: "Bag" },
      { name: "Roost V3 Laptop Stand", tag: "Laptop Stand" },
    ],
  },
];

export default function Gear() {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e5e5e5] mb-8">
        Gear
      </h1>

      <p className="text-[#e5e5e5] leading-relaxed max-w-xl mb-16">
        A living list of the gear I use and trust. Curated over time, updated
        as things change.
      </p>

      {/* Categories */}
      <div className="space-y-14">
        {categories.map((category, i) => (
          <section
            key={category.label}
            data-testid={`section-${category.label.toLowerCase()}`}
            className={i > 0 ? "pt-14 border-t border-[#1f1f1f]" : ""}
          >
            <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
              {category.label}
            </h2>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  data-testid={`row-gear-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-[#e5e5e5]">{item.name}</span>
                  <span className="text-xs text-[#666666] text-right shrink-0">
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-20 text-xs text-[#666666]">
        This list is updated as my kit evolves.
      </p>
    </Layout>
  );
}
