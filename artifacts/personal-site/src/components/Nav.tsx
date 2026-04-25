import { Link, useLocation } from "wouter";

// Reusable site navigation. Update links here to update them everywhere.
const links = [
  { href: "/about", label: "About" },
  { href: "/life", label: "Life" },
  { href: "/gear", label: "Gear" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [location] = useLocation();

  return (
    <header className="pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Name — plain link to home */}
        <Link href="/" data-testid="link-home">
          <span className="text-base text-[#e5e5e5] hover:text-white transition-colors">
            Walker Underwood
          </span>
        </Link>

        {/* Right-side nav links */}
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span
                  className={`transition-colors ${
                    active
                      ? "text-[#e5e5e5]"
                      : "text-[#888888] hover:text-[#e5e5e5]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
