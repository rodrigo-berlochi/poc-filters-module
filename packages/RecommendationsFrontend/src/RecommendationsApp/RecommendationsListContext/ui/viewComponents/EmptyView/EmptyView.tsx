import React from "react";
import { useTestAtom } from "../../../../_infrastructure/store";

const EmptyView = () => {
  const [state, setState] = useTestAtom();

  return (
    <div style={{ padding: "2rem", backgroundColor: "thistle" }}>
      <h2>
        Ups, we could not find any recommendations that match your criteria
      </h2>
      <br></br>
      <button onClick={() => setState(!state)}>Edit recommendations</button>
      <button>Clear all</button>
    </div>
  );
};

export { EmptyView };
