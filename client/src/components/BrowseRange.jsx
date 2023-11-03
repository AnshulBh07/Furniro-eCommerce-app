import React from "react";
import "../sass/browseRangeStyles.scss";
import { useNavigate } from "react-router-dom";

function BrowseRange() {
  const navigate = useNavigate();

  return (
    <section className="browse-range">
      <div className="container__range">
        <h1>browse the range</h1>
        <p>Browse a wide variety of furniture anywhere and anytime.</p>
        <div className="varieties">
          <div className="type">
            <button
              className="img__container"
              value={"living room"}
              onClick={() =>
                navigate({ pathname: "/shop", search: "?room=living+room" })
              }
            >
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
                alt="living"
              />
              living room
            </button>
            <p>Living Room</p>
          </div>

          <div className="type">
            <button
              className="img__container"
              onClick={() =>
                navigate({ pathname: "/shop", search: "?room=kitchen" })
              }
            >
              <img
                src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                alt="kitchen"
              />
            </button>

            <p>Kitchen</p>
          </div>

          <div className="type">
            <button
              className="img__container"
              onClick={() =>
                navigate({ pathname: "/shop", search: "?room=study" })
              }
            >
              <img
                src="https://images.unsplash.com/photo-1613252036716-e1efc9788e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="study"
              />
            </button>

            <p>Study</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseRange;
