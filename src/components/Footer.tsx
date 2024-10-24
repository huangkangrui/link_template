import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    'https://www.pinterest.com/pin/924504629752339146/',
    'https://www.pinterest.com/pin/924504629752339140/',
    'https://www.pinterest.com/pin/924504629752339139/',
    'https://www.pinterest.com/pin/924504629752339138/',
    'https://www.pinterest.com/pin/924504629752339137/',
    'https://www.pinterest.com/pin/924504629752339136/',
    'https://www.pinterest.com/pin/924504629752339135/',
    'https://www.pinterest.com/pin/924504629752339134/',
    'https://www.pinterest.com/pin/924504629752339133/',
    'https://www.pinterest.com/pin/924504629752339132/',
    'https://www.pinterest.com/pin/924504629752339131/',
    'https://www.pinterest.com/pin/924504629752339130/',
    'https://www.pinterest.com/pin/924504629752339129/',
    'https://www.pinterest.com/pin/924504629752339128/',
    'https://www.pinterest.com/pin/924504629752339127/',
    'https://www.pinterest.com/pin/924504629752339126/',
    'https://www.pinterest.com/pin/924504629752339125/',
    'https://www.pinterest.com/pin/924504629752339124/',
    'https://www.pinterest.com/pin/924504629752339123/',
    'https://www.pinterest.com/pin/924504629752339122/',
    'https://www.pinterest.com/pin/924504629752339121/',
    'https://www.pinterest.com/pin/924504629752339120/',
    'https://www.pinterest.com/pin/924504629752339119/',
    'https://www.pinterest.com/pin/924504629752339118/',
    'https://www.pinterest.com/pin/924504629752339117/',
    'https://www.pinterest.com/pin/924504629752339116/',
    'https://www.pinterest.com/pin/924504629752339115/',
    'https://www.pinterest.com/pin/924504629752339114/',
    'https://www.pinterest.com/pin/924504629752339113/',
    'https://www.pinterest.com/pin/924504629752339112/',
    'https://www.pinterest.com/pin/924504629752339111/',
    'https://www.pinterest.com/pin/924504629752339110/',
    'https://www.pinterest.com/pin/924504629752339109/',
    'https://www.pinterest.com/pin/924504629752221439/',
    'https://www.pinterest.com/pin/924504629752221438/',
    'https://www.pinterest.com/pin/924504629752221437/',
    'https://www.pinterest.com/pin/924504629752221431/',
    'https://www.pinterest.com/pin/924504629752221430/',
    'https://www.pinterest.com/pin/924504629752221429/',
    'https://www.pinterest.com/pin/924504629752221428/',
    'https://www.pinterest.com/pin/924504629752221427/',
    'https://www.pinterest.com/pin/924504629752221426/',
    'https://www.pinterest.com/pin/924504629752221425/',
    'https://www.pinterest.com/pin/924504629752221424/',
    'https://www.pinterest.com/pin/924504629752221423/',
    'https://www.pinterest.com/pin/924504629752221422/',
    'https://www.pinterest.com/pin/924504629752221421/',
    'https://www.pinterest.com/pin/924504629752221420/',
    'https://www.pinterest.com/pin/924504629752172972/',
    'https://www.pinterest.com/pin/924504629752172970/',
    'https://www.pinterest.com/pin/924504629752172969/',
    'https://www.pinterest.com/pin/924504629752172968/',
    'https://www.pinterest.com/pin/924504629752172967/',
    'https://www.pinterest.com/pin/924504629752172966/',
    'https://www.pinterest.com/pin/924504629752172965/',
    'https://www.pinterest.com/pin/924504629752172964/',
    'https://www.pinterest.com/pin/924504629752172963/',
    'https://www.pinterest.com/pin/924504629752172962/',
    'https://www.pinterest.com/pin/924504629752172961/',
    'https://www.pinterest.com/pin/924504629752172960/',
    'https://www.pinterest.com/pin/924504629752172959/',
    'https://www.pinterest.com/pin/924504629752172958/',
    'https://www.pinterest.com/pin/924504629752114418/',
    'https://www.pinterest.com/pin/924504629752114415/',
    'https://www.pinterest.com/pin/924504629752114413/',
    'https://www.pinterest.com/pin/924504629752114412/',
    'https://www.pinterest.com/pin/924504629752114411/',
    'https://www.pinterest.com/pin/924504629752114410/',
    'https://www.pinterest.com/pin/924504629752114354/',
    'https://www.pinterest.com/pin/924504629752114335/',
    'https://www.pinterest.com/pin/924504629752112522/',
    'https://www.pinterest.com/pin/924504629752112521/',
    'https://www.pinterest.com/pin/924504629752112423/',
    'https://www.pinterest.com/pin/924504629752112407/',
    'https://www.pinterest.com/pin/924504629752112396/',
    'https://www.pinterest.com/pin/924504629752112375/',
    'https://www.pinterest.com/pin/924504629752112374/',
    'https://www.pinterest.com/pin/924504629752112371/',
    'https://www.pinterest.com/pin/924504629752112366/',
    'https://www.pinterest.com/pin/924504629752112360/',
    'https://www.pinterest.com/pin/924504629752112356/',
    'https://www.pinterest.com/pin/924504629752112352/',
    'https://www.pinterest.com/pin/924504629752112342/',
    'https://www.pinterest.com/pin/924504629751958641/',
    'https://www.pinterest.com/pin/924504629751958612/',
    'https://www.pinterest.com/pin/924504629751958601/',
    'https://www.pinterest.com/pin/924504629751958582/',
    'https://www.pinterest.com/pin/924504629751958564/',
    'https://www.pinterest.com/pin/924504629751958535/',
    'https://www.pinterest.com/pin/924504629751958426/',
    'https://www.pinterest.com/pin/924504629751957717/',
    'https://www.pinterest.com/pin/924504629751957680/',
    'https://www.pinterest.com/pin/924504629751957664/',
    'https://www.pinterest.com/pin/924504629751957639/',
    'https://www.pinterest.com/pin/924504629751957494/',
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Nextly</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Vercel usually configures the build settings automatically for Next.js apps, but you can modify any settings as needed. Ensure that
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>

          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item}
              className="w-50 px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              {`pinterest picture${index}`}
            </Link>
          ))}
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Glazestock
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
