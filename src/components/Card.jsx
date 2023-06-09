/* eslint-disable react/prop-types */
import moment from "moment";
import { RiStarSFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";

const Card = ({ name, username, img, desc, stars, issues, timing }) => {
  return (
    <section className="card">
      <aside className="userImgHolder">
        <img src={img} alt="name" className="userImg" />
      </aside>
      <main className="userDetailsHolder">
        <h3> {name} </h3>
        <h5>{username}</h5>
        <p>{desc}</p>
        <section className="moreDetailsHolder">
          <span className="stars">
            <RiStarSFill /> {stars}
          </span>
          <span className="issues">
            <GoIssueOpened />
            {issues}
          </span>
          <span className="time"> {moment(timing).format("LL")}</span>
        </section>
      </main>
    </section>
  );
};

export default Card;
