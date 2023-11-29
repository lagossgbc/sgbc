import Button from "@/components/form/Button";
import React from "react";

const CovenantAndConstitution = () => {
  return (
    <section
      className="pt-10 pb-32 -mb-2 text-center"
      style={{
        backgroundImage:
          "url(https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/covenant-bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontSize: "14px",
      }}
    >
      <h2 className="mt-8 mb-10 font-bold text-4xl">
        Covenant and Constitution
      </h2>
      <div className="max-w-6xl mx-auto px-6 sm:px-[5%]">
        <div
          className="px-10 py-20 rounded-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <p className="font-bold">
            Linked to this page are foundational documents of our local church
            community at here at Sovereign Grace Bible Church. These texts—the
            Church Covenant and the Church Constitution—serve as the bedrock for
            our collective life and governance, encapsulating our commitments
            and guiding our journey together in Christ.
          </p>

          <h3 className="my-10 font-semibold text-3xl">
            Sovereign Grace Bible Church Covenant
          </h3>
          <p className="font-bold">
            Our Church Covenant is more than just a written agreement; it&apos;s
            a sacred promise that each of us makes to the Lord and to one
            another. It expresses our shared beliefs, our mutual
            responsibilities, and our unified dedication to live as Christ’s
            disciples. This covenant binds us in spiritual kinship, holds us
            accountable in love, and propels us towards collective and
            individual growth in faith. It is a living document that reflects
            the heartbeat of our congregation’s life in Christ.
          </p>

          <div className="flex justify-center mb-8">
            <Button>View covenant</Button>
          </div>
          <h3 className="my-10 font-semibold text-3xl">
            Sovereign Grace Bible Church Constitution
          </h3>
          <p className="font-bold">
            This Constitution embodies the core principles and practices of our
            church, It serves as a guiding document, outlining our doctrinal
            beliefs, governance structure, and the responsibilities of both
            church leaders and members. In adhering to this established contents
            of this document, we seek to maintain the purity of the Gospel, the
            proper administration of the sacraments, and the diligent practice
            of church discipline.
          </p>
          <div className="flex justify-center mb-8">
            <Button>View constitution</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovenantAndConstitution;
