import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { links } from "../data/links";

const navItems = [
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
  { label: "Resume", hash: "resume" },
  { label: "Contact", hash: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const goTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      return;
    }
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#638919]">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          to="/"
          className="text-[15px] tracking-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, color: "#F5F6F3" }}
        >
          Brandon.Downer
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.hash}>
              <a
                href={`/#${item.hash}`}
                onClick={goTo(item.hash)}
                className="font-mono text-[13px] text-[#F5F6F3] transition-colors hover:opacity-75"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="btn !px-4 !py-2 border border-[#F5F6F3] text-[#F5F6F3] text-xs hover:bg-[#F5F6F3] hover:text-[#638919]"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-[#F5F6F3] text-[#F5F6F3]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t hairline bg-paper md:hidden dark:bg-ink">
          <ul className="section-shell flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.hash}>
                <a
                  href={`/#${item.hash}`}
                  onClick={goTo(item.hash)}
                  className="block py-3 font-mono text-sm text-slate-light dark:text-slate-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
