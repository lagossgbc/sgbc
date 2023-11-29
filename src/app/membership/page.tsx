import Link from "next/link";
import React from "react";

const MembershipRequest = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#CDCDCD]">
      <div className="max-w-2xl mx-auto py-32 text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-20">
          Membership Request
        </h2>
        <p className="mb-14">
          We request that potential members thoroughly read and concur with the
          Second London Baptist Confession of 1689, as well as the church
          constitution. Additionally, please complete the membership application
          form for the Elders&apos; consideration. The form is available for
          download below:
        </p>
        <Link href="#" className="underline text-blue-600 font-bold">
          Click to download the Membership Request form
        </Link>
      </div>
    </section>
  );
};

export default MembershipRequest;
