import Layout from "@/components/Layout";

// Life page — outside of work
export default function Life() {
  const interests = [
    "Hiking",
    "Backpacking",
    "Shooting",
    "Fishing",
    "Videography",
    "Gaming",
    "Anime",
    "AI",
    "Podcasts",
    "Books",
  ];

  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e5e5e5] mb-8">
        Life
      </h1>

      {/* Photo */}
      <img
        src="/backpacking.jpg"
        alt="Backpacking"
        data-testid="img-backpacking"
        className="h-[28rem] w-auto rounded-lg object-cover mb-12"
      />

      {/* Bio paragraphs */}
      <div className="space-y-6 max-w-xl text-[#e5e5e5] leading-relaxed">
        <p>
          I'm a strange mix — equal parts outdoorsman and tech nerd. Some days
          I don't leave my office. Other days I'm deep in the mountains with
          no signal. Both feel completely natural to me.
        </p>
        <p>
          Outside I'm hiking, backpacking, shooting, fishing, and almost
          always filming something. Inside I'm gaming, watching anime,
          learning new skills, and building things with AI. There's almost
          always a podcast or a book playing in the background. Headphones are
          basically a permanent fixture.
        </p>
        <p>
          Right now I'm obsessed with backpacking. There's something about
          stripping everything down to what fits on your back and disappearing
          into the mountains for a few days that resets everything.
        </p>
        <p>
          But all of it — the outdoors, the tech, the building — comes back to
          the same thing. I'm trying to build a rich life. And I don't mean
          rich in money. I mean rich in the most valuable thing there is —
          time. Time spent on work I actually care about. Time in places that
          make me feel alive. Time with people worth spending it on.
        </p>
        <p>That's what I'm building toward.</p>
      </div>

      <hr className="my-16 border-t border-[#1f1f1f]" />

      {/* Interests as tags */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
          Interests
        </h2>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[#e5e5e5]">
          {interests.map((item, i) => (
            <li
              key={item}
              data-testid={`text-interest-${item.toLowerCase()}`}
              className="flex items-center"
            >
              <span>{item}</span>
              {i < interests.length - 1 && (
                <span className="text-[#666666] ml-3">·</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
