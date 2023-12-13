import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-bold text-4xl mb-4">CatchUp</h1>
      <p className="w-80 text-center text-sm my-4">
        An app for quick reminders to stay connected with your closest personal
        and professional contacts.
      </p>
      <div className="flex space-x-4 my-4">
        <Image src="/char1/expr1.webp" width={200} height={200} alt="animoji" />
        <Image src="/char2/expr2.webp" width={200} height={200} alt="animoji" />
        <Image src="/char3/expr1.webp" width={200} height={200} alt="animoji" />
      </div>
    </div>
  );
};

export default LandingPage;
