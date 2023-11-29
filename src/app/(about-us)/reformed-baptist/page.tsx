import Link from "next/link";

export const metadata = {
  title: "About Us - Reformed Baptist",
};

const ReformedBaptist = () => {
  return (
    <section className="px-4">
      <p>
        We are a congregation that holds to the Reformed Baptist tradition. Our
        core belief is anchored in the grace of God, affirming that salvation is
        bestowed solely by grace alone, through faith alone in our Lord Jesus
        Christ alone to the glory of God alone, according to scriptures alone
        —this is the heart of Calvinistic soteriology, which we embrace with
        conviction. we also typically affirm the Baptist distinctive of
        believer&apos;s baptism by immersion.
      </p>
      {/* ===================================
            BEING REFORMED MEANS ======================================
            =======================================================================
      */}
      <h2 className="text-3xl font-semibold my-12 text-center md:text-left">
        Being Reformed means...
      </h2>
      <ol>
        <li className="list-decimal">
          <span className="block mb-4">
            We are <strong>Calvinistic</strong>
          </span>
          <ul>
            We believe in the doctrines of grace commonly summarized by the
            acronym TULIP.
            <li className="list-disc ml-4 mt-3">
              <strong>T - Total Depravity:</strong> (Man is spiritually dead and
              thus unable to turn to God in faith and repentance prior to being
              born again. Each man is a free agent but does not possess free
              will, because it is not within his nature to trust in Christ.)
            </li>
            <li className="list-disc ml-4 mt-3">
              <strong>U - Unconditional Election</strong> (God chose to save us
              of His own free will and not based on our foreseen faith or good
              works.)
            </li>
            <li className="list-disc ml-4 mt-3">
              <strong>L - Limited Atonement</strong> (Christ’s work to atone for
              our sins was effectual and objective and therefore was only
              accomplished for the elect, though all mankind benefits in some
              manner from His redemptive work for His church. He atoned for the
              sins of all men without distinction, but not all men without
              exception. He saved the whole world from their sins in that His
              elect come from every tribe, tongue, people, and nation.)
            </li>
            <li className="list-disc ml-4 mt-3">
              <strong>I - Irresistible Grace</strong> (God regenerates us in
              order to make us willing followers of Christ and not vice versa.
              Grace will always be resisted until God choses to cause us to be
              born again, after which we joyfully comply with grace. In other
              words, regeneration precedes faith. The grace of regeneration does
              not require our acceptance, but rather creates it.)
            </li>
            <li className="list-disc ml-4 mt-3">
              <strong> P - Perseverance/Preservation of the saints</strong> (All
              those whom God elects and regenerates are also caused to persevere
              in the faith by the work of the Holy Spirit. Though there are
              those that once proclaimed the faith but now reject it, they are
              understood to never have been born again (1 John 2:19). Jesus does
              not lose any of His sheep.)
            </li>
          </ul>
        </li>
        <li className="list-decimal mt-6">
          <span className="block mb-4">
            We are <strong>Confessional</strong>
          </span>
          We believe that the London Baptist Confession of Faith of 1689 (Also
          known as the Second London Confession) is the best summary of what the
          Scriptures teach about the Christian faith. We recognize that it is
          not an exhaustive document on Christianity, but that it clearly
          summarizes the main doctrines (or teachings) found in Scripture and
          relating to basic Christian faith and practice. We also recognize that
          it is a document written by fallible men and not inspired by God,
          therefore it is fully subject to the Scriptures and finds its
          authority only in its faithfulness to the Scriptures. The Word of God
          is the ultimate authority in all matters pertaining to the Christian
          faith and practice, but we affirm the usefulness of having a document
          that summarizes what we believe. Download a copy of the confession
          <Link
            href="https://www.chapellibrary.org/pdf/books/lbcw.pdf"
            target="_blank"
            className="font-semibold underline ml-1"
          >
            here
          </Link>
          .
        </li>
        <li className="list-decimal mt-6">
          <span className="block mb-4">
            We are <strong>Covenantal or hold to Covenant Theology</strong>
          </span>
          We believe the covenants in Scripture are the framework in which
          redemptive history transpired. We believe that before creation God
          made a Covenant of Redemption among the persons of the Trinity that
          formalized the work and role of each person in God’s decree to allow
          sin and to redeem a people for Himself. We believe Adam was under a
          <strong> Covenant of Works</strong> in the garden to obey and live. We
          believe the Abrahamic, Mosaic, and Davidic Covenants are not salvific
          in and of themselves, but provided the context and groundwork for
          Christ to enter into creation and merit salvation for fallen men. We
          believe the <strong>New Covenant is the Covenant of Grace </strong>
          which is made with the true church in the New Testament. It is
          unbreakable and retroactive to Old Testament saints who received New
          Covenant benefits via the Old Covenant economy (the summation of the
          Abrahamic, Mosaic, and Davidic Covenants). We believe the church is a
          reconstituted Israel with no racial or ethnic boundaries. All those
          with true saving faith have been saved by the work accomplished by
          Christ in the New Covenant. Though the promise of salvation by the
          Messiah was prevalent and progressively revealed in greater detail in
          the Old Covenant, no one has ever been saved by their obedience to the
          command “do this and live” that was operative in the Old Covenant
          context.
        </li>
        <li className="list-decimal mt-6">
          <span className="block mb-4">
            We Practice <strong>The Regulative principle of worship</strong>
          </span>
          We only implement into formal public worship the elements of worship
          which are explicitly prescribed in God’s Word. We do not believe that
          whatever is not explicitly condemned is allowable (i.e., the Normative
          Principle). Therefore, the church is limited to practicing only the
          elements of worship given to us— the public reading and preaching of
          Scripture, prayer, singing, and the two ordinances or sacraments of
          the New Covenant (baptism and the Lord’s Supper). We further believe
          that the Regulative Principle of Worship restricts baptism and the
          Lord’s Supper to professing believers that have given evidence of true
          conversion.
        </li>
        <li className="list-decimal mt-6">
          <span className="block mb-4">
            We believe in the <strong> Moral Law of God</strong>
          </span>
          The Moral Law of God is based in God’s character and is therefore
          always true and applicable. In the context of God’s covenants there is
          additional Positive Law for each covenant that likewise must be obeyed
          at the time that each covenant is in place. from the beginning of
          creation into eternity the Moral Law of God has been in place. It is
          known to all men by virtue of being made in the image and likeness of
          God (though men do indeed seek to suppress it). It is summarized in
          the Ten Commandments which are therefore still applicable for
          believers today. And it was further summarized by Jesus when He said
          the greatest commandments was to love the Lord your God with all your
          heart, soul, mind, and strength. And the 2nd greatest commandment is
          the love your neighbor as yourself. All the law and the prophets hang
          on these two commands.
        </li>
      </ol>
      {/* ===================================
            BEING BAPTIST MEANS ======================================
            =======================================================================
      */}
      <h2 className="text-3xl font-semibold my-12 text-center md:text-left">
        Being Baptist means...
      </h2>
      <ol>
        <li className="list-decimal mb-4">
          <strong>We are Credobaptist: </strong> We only baptize those that give
          a credible profession faith and evidence that accompanies their
          sincerity. We also only baptize by the method of immersion to
          accurately capture the symbolism of putting the old man to death and
          rising again in Christ. We do not practice infant baptism. Our stance
          on credobaptism by immersion is confirmed by a correct reading of
          Scripture, a correct application of the Regulative Principle of
          Worship, a complete application of Reformed hermeneutics, and by
          correct Covenant Theology. Both baptism and the Lord’s Supper are
          fenced (restricted) by the same principle— to be given to professing
          believers only.
        </li>
        <li className="list-decimal">
          <strong>We are Congregational: </strong> We affirm congregational
          governance, where the local congregation is self-governing under the
          headship of Christ. There is no authoritative structure above the
          local church. Each local church is governed by a plurality of elders
          and deacons. However, it is the gathered assembly that elects its own
          elders and deacons and voices its decision on matters of worship,
          doctrine, and discipline. This means we are not part of any
          denomination.
        </li>
      </ol>
    </section>
  );
};

export default ReformedBaptist;
