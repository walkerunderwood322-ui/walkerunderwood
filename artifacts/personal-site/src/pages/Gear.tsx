import Layout from "@/components/Layout";

// Gear page — a curated personal list grouped by category
type GearItem = { name: string; tag: string; image?: string };
type GearCategory = { label: string; items: GearItem[] };

const categories: GearCategory[] = [
  {
    label: "Backpacking",
    items: [
      { name: "Durston Kakwa 55", tag: "Pack", image: "/gear/Durston-kakwa-55.jpg" },
      { name: "Paria Outdoors Zion 2P", tag: "Shelter", image: "/gear/Paria-Brice.JPG" },
      { name: "Paria Outdoors Double Pad", tag: "Sleep System", image: "/gear/Paira-doublesleepingpad.jpg.webp" },
      { name: "Zenbivy Double Quilt System", tag: "Sleep System", image: "/gear/ZenBivy_light_bed_double.jpg" },
    ],
  },
  {
    label: "EDC",
    items: [
      { name: "Ridge Wallet (Black)", tag: "Wallet", image: "/gear/Ridge-Wallet.HEIC" },
      { name: "Whoop", tag: "Fitness Tracker", image: "/gear/Whoop.HEIC" },
      { name: "Civivi Vision FG", tag: "Knife", image: "/gear/civivi-vision-fg.webp" },
      { name: "Pilot G2", tag: "Pen", image: "/gear/Pilot-G2.HEIC" },
    ],
  },
  {
    label: "Videography",
    items: [
      { name: "Sony ZV-E10", tag: "Camera" },
      { name: "Sony 10-18mm OSS", tag: "Lens" },
      { name: "GoPro Hero 12", tag: "Action Cam" },
      { name: "Insta360 X4", tag: "360 Camera" },
      { name: "DJI Mini 4 Pro", tag: "Drone", image: "/gear/DJI-Mini-Pro.HEIC" },
      { name: "DJI Mic Mini", tag: "Audio", image: "/gear/DJI-Mic-Mini.HEIC" },
      { name: "Shure MV7+", tag: "Podcast Mic", image: "/gear/Sure-MV7+.HEIC" },
      { name: "Amaran Pano 60c", tag: "Lighting" },
    ],
  },
  {
    label: "Travel",
    items: [
      { name: "Aer Travel Pack 3", tag: "Bag", image: "/gear/Aer-Travel-Pack3.webp" },
      { name: "Peak Design Packing Cubes", tag: "Organization", image: "/gear/PeakDesign-packing-cube-jpg.jpg" },
      { name: "Aer Travel Kit 2", tag: "Toiletry Kit", image: "/gear/Aer-T.jpg.webp" },
    ],
  },
  {
    label: "Tech",
    items: [
      { name: "iPhone 15 Plus", tag: "Phone", image: "/gear/Iphone-15.jpg" },
      { name: "MacBook Pro M4", tag: "Computer", image: "/gear/Macbook-M4-Pro.HEIC" },
      { name: "MacBook Air M4", tag: "Computer", image: "/gear/Macbook-M4-Air.HEIC" },
      { name: "iPad Pro", tag: "Tablet" },
      { name: "NiteCore NB20000", tag: "Power Bank", image: "/gear/NiteCore_Nb20000.HEIC" },
      { name: "Nuphy Air75", tag: "Keyboard", image: "/gear/Nuphy-Air75.HEIC" },
      { name: "Beyerdynamic DT 770 Pro X", tag: "Headphones", image: "/gear/Beyerdynamic-DT-770-ProX.HEIC" },
    ],
  },
  {
    label: "Want",
    items: [
      { name: "ULANZI JJ06 GlideGo Tripod", tag: "Tripod", image: "/gear/ULANZI-JJ06-GlideGo-Tripod.jpg" },
      { name: "Sigma 17-40mm f/1.8 ART", tag: "Lens", image: "/gear/Sigma-17-40-art.webp" },
      { name: "Sony a6700", tag: "Camera", image: "/gear/Sony-A6700.jpg" },
      { name: "Dell U2725QE", tag: "Monitor", image: "/gear/Dell-u2725qe.avif" },
      { name: "Aer Travel Pack 4", tag: "Bag", image: "/gear/AER21071_travelpack435l_black_34hero-4-(2).jpg.webp" },
      { name: "Roost V3 Laptop Stand", tag: "Laptop Stand", image: "/gear/roostv3.jpg" },
    ],
  },
];

function GearCard({ item }: { item: GearItem }) {
  return (
    <div
      data-testid={`card-gear-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group"
    >
      <div className="aspect-square overflow-hidden bg-[#111111]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <p className="mt-2 text-sm text-[#e5e5e5] leading-snug">{item.name}</p>
      <p className="text-xs text-[#666666]">{item.tag}</p>
    </div>
  );
}

function GearRow({ item }: { item: GearItem }) {
  return (
    <li
      key={item.name}
      data-testid={`row-gear-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex items-baseline justify-between gap-4"
    >
      <span className="text-[#e5e5e5]">{item.name}</span>
      <span className="text-xs text-[#666666] text-right shrink-0">{item.tag}</span>
    </li>
  );
}

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
        {categories.map((category, i) => {
          const withImage = category.items.filter((item) => item.image);
          const withoutImage = category.items.filter((item) => !item.image);

          return (
            <section
              key={category.label}
              data-testid={`section-${category.label.toLowerCase()}`}
              className={i > 0 ? "pt-14 border-t border-[#1f1f1f]" : ""}
            >
              <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
                {category.label}
              </h2>

              {withImage.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {withImage.map((item) => (
                    <GearCard key={item.name} item={item} />
                  ))}
                </div>
              )}

              {withoutImage.length > 0 && (
                <ul className="space-y-3">
                  {withoutImage.map((item) => (
                    <GearRow key={item.name} item={item} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="mt-20 text-xs text-[#666666]">
        This list is updated as my kit evolves.
      </p>
    </Layout>
  );
}
