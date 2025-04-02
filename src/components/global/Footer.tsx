import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-[#1F323F] mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-full">
            <span className="text-[#FFD192] font-[400] text-[30px]">
              Contact us:
            </span>
            <div className="text-white flex items-center gap-4">
              <p>+9193XXXXXXXX</p>
              <p>|</p>
              <Link href="mailto:homify@gmail" className="text-white">
                homify@gmail.com
              </Link>
            </div>
            <div className="flex flex-row gap-4">{/*  */}</div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
