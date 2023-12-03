"use client";

import HeadSEO from "../components/HeadSEO";

export default function Home() {
  return (
    <div>
      <HeadSEO />
      <main>
        <h1 className="title">
          Welcome to <a href="#">CatchUp</a>
        </h1>
        <div className="bg-black">Jgoigigif</div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
