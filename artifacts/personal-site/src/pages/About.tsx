import Layout from "@/components/Layout";

// About page — bio, principles
export default function About() {
  return (
    <Layout>
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e5e5e5] mb-3">
        Hello
      </h1>
      <p className="text-lg text-[#666666] mb-8">
        I'm Walker — a builder.
      </p>

      {/* Headshot */}
      <img
        src="/headshot.jpg"
        alt="Walker Underwood"
        data-testid="img-headshot"
        className="w-20 h-20 rounded-full object-cover mb-12"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Bio paragraphs */}
      <div className="space-y-6 text-[#e5e5e5] leading-relaxed max-w-xl">
        <p>
          Homes, websites, videos. Maybe one day autonomous humanoid robots or
          defense technology. The medium changes. The obsession with quality
          doesn't.
        </p>
        <p>
          I believe that being a great builder requires more than good
          intentions. It takes first principles thinking — questioning
          everything, diving deep, understanding the constraints of whatever
          you're making. That's how I elevate the quality of what I put into
          the world.
        </p>
        <p>
          I'm 20 years old and live in Blue Ridge, GA with my future wife
          Kylie. We're planning to relocate to Austin, TX soon — I'm hoping
          that expanding my footprint on the internet helps me land the job
          that gets us there. Before Underwood Home Improvement I was a
          freelance marketer. I'm always building something.
        </p>
        <p>
          At 18 I started Underwood Home Improvement. I noticed something
          simple: there were a lot of newly built houses near me, but they
          were just that — houses. The people moving to the north Georgia
          mountains were building their forever homes, but once the builders
          left they realized quickly that a brand new house still needs a lot
          of work to actually feel like home. Fencing. Bonus rooms. Garages.
          Doggy doors. The details that make it theirs.
        </p>
        <p>
          I ran every part of it — sales, marketing, accounting, and most
          importantly making sure every customer got the highest quality work
          I could deliver. It's been great. But I'm ready to take what I've
          built and point it at something new.
        </p>
      </div>

      <hr className="my-16 border-t border-[#1f1f1f]" />

      {/* How I operate */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
          How I operate
        </h2>
        <ul className="space-y-4 text-[#e5e5e5] max-w-xl">
          <li>
            <span className="text-[#e5e5e5]">Willing to learn</span>
            <span className="text-[#666666]">
              {" "}
              — staying curious beats knowing everything
            </span>
          </li>
          <li>
            <span className="text-[#e5e5e5]">Willing to be different</span>
            <span className="text-[#666666]"> — real over safe, every time</span>
          </li>
          <li>
            <span className="text-[#e5e5e5]">Bias toward action</span>
            <span className="text-[#666666]">
              {" "}
              — done beats perfect, move then adjust
            </span>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
