import Image from "next/image";
import { CampusData } from "../../_data";

import classes from "./Grid.module.scss";

const Grid = () => {
  return (
    <section className={`max-w-6xl mx-auto ${classes.Grid}`}>
      <div className={classes.Top}>
        <h2 className="text-2xl sm:text-3xl  font-bold mb-6">
          Our Current Campuses
        </h2>
        <p>
          With Christ&apos;s merits and God&apos;s glory in view, Grace Campus
          outreach (GCO) seeks to proclaim the gospel of God&apos;s salvation on
          campuses — building up the saints, evangelizing the lost, exposing
          falsehood and guiding the honest enquirer to the saving truth of
          God&apos;s Word in the Holy Scriptures alone.
        </p>
        <p>
          Grace campus fellowships have been established in 4 campuses in
          Nigeria. University of Lagos, Yaba College of Technology, University
          of Ife, and University of Ibadan
        </p>
      </div>
      {/* Campuses */}
      <ul>
        {CampusData.map((campus, index) => (
          <li
            key={index}
            className="rounded-3xl"
            style={{ boxShadow: "0px 0 30px rgba(0,0,0,.2)" }}
          >
            <figure className="relative w-full h-48">
              <Image
                src={campus.img}
                alt={campus.name}
                fill
                style={{ borderRadius: "1.5rem 1.5rem 0 0" }}
              />
            </figure>
            <div className="p-4 overflow-hidden">
              <h3 className="font-Montserrat font-semibold">{campus.name}</h3>
              <h3 className="font-Montserrat font-semibold mb-4">
                {campus.lead}
              </h3>
              <div className="">
                <p>Meeting Times:</p>
                {campus?.evangelism && <p>Evangelism | {campus.evangelism}</p>}
                <p>Bible Study | {campus.bibleStudy}</p>
                {campus?.prayerMeeting && (
                  <p>Prayer meeting | {campus.prayerMeeting}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Other Activities */}
      <div className={classes.Activities}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Other Activities
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          Timothy Fellowship
        </h3>
        <p className="mb-10">
          A discipleship program led by Elders of SGBC that seeks to provide
          biblical training for leaders of campus fellowships on how to
          accurately divide God’s word, provide godly oversight and lead other
          students to Christ.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          Varsity Forums
        </h3>
        <p className="">
          Is a Bible Seminar that is held on different campuses with the aim of
          pointing students to the sound truth of scriptures. Themes like
          Apologetics, and Polemics, are treated. It is evangelistic in nature.
        </p>
      </div>
    </section>
  );
};

export default Grid;
