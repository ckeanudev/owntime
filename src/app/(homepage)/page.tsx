//app/page.tsx

import Image from "next/image";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="./images/Owntime.svg"
          width={500}
          height={200}
          alt="owntime-logo"
        />

        <p className="font-medium mt-8 text-lg">
          A web app where you can manage your own time on time.
        </p>
      </div>

      <section className="w-full p-2 border-t text-sm text-center font-medium">
        Developed by Ckeanu
      </section>
    </div>
  );
};

export default page;
