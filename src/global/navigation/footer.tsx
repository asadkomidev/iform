import Link from "next/link";

import Container from "@/components/container";
import Logo from "./logo";
import { FOOTER_ITEMS } from "../constants/navigation";

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full max-w-7xl  pt-24 pb-6 bg-muted">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="space-y-8">
              <Logo />
              <p className="text-lg font-normal max-w-xs leading-8 tracking-wide text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
              <div>
                <div>
                  <h3 className="text-2xl font-medium leading-8 ">Links</h3>
                  <div className="mt-6 space-y-4">
                    {FOOTER_ITEMS.Links.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg leading-8 hover:text-muted-foreground">
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:mt-0">
                <h3 className="text-2xl font-medium leading-8 ">Items</h3>
                <div className="mt-6 space-y-4">
                  {FOOTER_ITEMS.Items.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg leading-8 hover:text-muted-foreground">
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t border-gray-900/10 pt-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs leading-5 text-muted-foreground">
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-xs leading-5 text-muted-foreground">
                Terms of service
              </Link>
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 Finvista. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
