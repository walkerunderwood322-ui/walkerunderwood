import { Link } from "wouter";
import Layout from "@/components/Layout";

// Home page — hero, quick facts, brief Work + Life previews
export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e5e5e5] mb-4">
          Walker Underwood
        </h1>
        <p className="text-lg text-[#666666] mb-10">
          Young entrepreneur obsessed with building a good life.
        </p>
        <p className="text-base leading-relaxed text-[#e5e5e5] max-w-xl">
          I build things — homes, businesses, and skills. Based in Blue Ridge,
          GA, relocating to Austin, TX. Always learning, always moving.
        </p>

        {/* Quick facts */}
        <ul className="mt-10 space-y-2 text-[#e5e5e5]">
          <li>Founder of Underwood Home Improvement</li>
          <li>Exploring content creation and AI</li>
          <li>Backpacker, hiker, outdoor obsessive</li>
        </ul>

        <Link href="/about" data-testid="link-read-more-about">
          <span className="inline-block mt-8 text-[#e5e5e5] hover:text-white transition-colors">
            Read more about me →
          </span>
        </Link>
      </section>

      {/* Divider */}
      <hr className="my-20 border-t border-[#1f1f1f]" />

      {/* Life preview */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
          Life
        </h2>
        <p className="text-[#e5e5e5] mb-3">
          Outside of work, I spend my time outdoors and behind a camera.
        </p>
        <p className="text-[#666666]">
          Hiking, Backpacking, Videography, AI, Podcasts, Gaming
        </p>
        <Link href="/life" data-testid="link-read-more-life">
          <span className="inline-block mt-6 text-[#e5e5e5] hover:text-white transition-colors">
            Read more →
          </span>
        </Link>
      </section>
    </Layout>
  );
}
