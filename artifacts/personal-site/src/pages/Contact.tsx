import Layout from "@/components/Layout";

// Contact page — minimal
export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e5e5e5] mb-10">
        Get in touch
      </h1>

      <div className="space-y-6 max-w-xl">
        <p className="text-[#e5e5e5] leading-relaxed">
          I'm always open to interesting conversations.
        </p>

        <p>
          <a
            href="mailto:walker@walkerunderwood.com"
            data-testid="link-email"
            className="text-[#e5e5e5] hover:text-white transition-colors"
          >
            walker@walkerunderwood.com
          </a>
        </p>
      </div>

      <hr className="my-16 border-t border-[#1f1f1f]" />

      {/* Elsewhere */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#666666] mb-6">
          Elsewhere
        </h2>
        <ul className="space-y-3 text-[#e5e5e5]">
          <li className="flex items-baseline justify-between gap-4">
            <span className="text-[#666666]">Twitter/X</span>
            <a
              href="https://x.com/Walker7211_"
              target="_blank"
              rel="noreferrer"
              data-testid="link-twitter"
              className="text-[#e5e5e5] hover:text-white transition-colors"
            >
              @Walker7211_
            </a>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <span className="text-[#666666]">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/WalkerUnderwood"
              target="_blank"
              rel="noreferrer"
              data-testid="link-linkedin"
              className="text-[#e5e5e5] hover:text-white transition-colors"
            >
              /in/WalkerUnderwood
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
