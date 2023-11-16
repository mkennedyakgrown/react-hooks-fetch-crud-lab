import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handleNewQuestion() {
    setPage("List");
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm {...{onNewQuestion : handleNewQuestion}} /> : <QuestionList />}
    </main>
  );
}

export default App;
