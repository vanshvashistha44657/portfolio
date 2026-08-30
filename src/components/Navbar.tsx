import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "../data/personal";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = navItems.map((n) => n.href.replace("#", ""));
  const active = useActiveSection(ids);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <nav
            className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 ${
              scrolled
                ? "border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
                : "border-transparent bg-transparent"
            }`}
            aria-label="Primary"
          >
            <a
              href="#home"
              className="font-mono text-xs tracking-widest text-[var(--color-ink)] px-2 py-1"
              aria-label={`${personal.name}, back to top`}
              data-cursor="hover"
            >
              {personal.initials}
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      data-cursor="hover"
                      className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                        isActive
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-[var(--color-surface-2)]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="/music.html"
                  data-cursor="hover"
                  className="relative px-4 py-2 text-sm rounded-full text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Music
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              data-cursor="hover"
              className="hidden md:inline-flex items-center rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] text-sm font-medium px-4 py-2 hover:bg-[var(--color-accent)] transition-colors"
            >
              Let's talk
            </a>

            <button
              className="md:hidden p-2 text-[var(--color-ink)]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl text-[var(--color-ink)]"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navItems.length, duration: 0.4 }}
              >
                <a
                  href="/music.html"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-[var(--color-ink)]"
                >
                  Music
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}