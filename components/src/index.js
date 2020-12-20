import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="David"
          message="this is awesome!"
          date="Today at 3:43PM"
          image={faker.image.animals()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          message="get a new article"
          date="Today at 2:00AM"
          image={faker.image.animals()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jenny"
          message="I can't wait for more"
          date="12/04/2020 at 5:32AM"
          image={faker.image.animals()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Chris"
          message="Maybe the next one will be better"
          date="11/23/2020 at 09:45PM"
          image={faker.image.animals()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
