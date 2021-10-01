import Head from "next/head";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Confetti from "react-confetti";

export default function Home() {
  const [value, setValue] = useState(0);
  const [confetti, setConfetti] = useState(false);

  const handleChange = (x) => {
    setValue(x);
  };

  const numToTel = (x) => {
    let num = x.toString();
    while (num.length < 10) num = "0" + num;
    return (
      "(" +
      num.substring(0, 3) +
      ")  " +
      num.substring(3, 6) +
      " - " +
      num.substring(6)
    );
  };

  const handleSubmit = () => {
    setConfetti(true);
  };

  return (
    <>
      {/* Need to only run confetti on client side */}
      {process.browser && <Confetti run={confetti} />}
      <div className="flex flex-col justify-between min-h-screen px-4 text-white w-100">
        <Head>
          <title>Phone Input Assumptions</title>
          <meta
            name="description"
            content="The best phone number input you've ever seen!"
          />
          <meta name="theme-color" content="#F59E0B" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto text-center my-auto">
          <h1 className="text-2xl font-bold">Input your phone number:</h1>
          <div className="bg-yellow-600 border-2 rounded-md px-1 pt-1 m-2 w-48 h-8 mx-auto">
            {numToTel(value)}
          </div>
          <Slider
            min={0}
            max={9999999999}
            className="my-3"
            onChange={handleChange}
          />
          <button
            className="p-2 pb-1 rounded-md text-yellow-500 bg-white font-bold text-lg hover:bg-gray-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </main>

        <footer className="py-2 text-center">
          <p>
            Made with 🤍 by Jorge Zreik &apos;22 for{" "}
            <a
              href="https://kellercenter.princeton.edu/courses"
              className="underline font-bold"
            >
              EGR200
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
