"use client";
import { updateJournalEntry } from "@/app/utils/api";
import React, { useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
const Editor = (entry) => {
  // console.log(entry.entry.content);

  const [text, setText] = useState(entry.entry.content);
  const [loading, setLoading] = useState(false);
  const updatedEntry = (_text) => {
    setLoading(true)
    updateJournalEntry(entry.entry.id, _text);
    setLoading(false)
  };
  useAutosave({ data: text, onSave: updatedEntry });
  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
    {loading ? <div>loading...</div> : <div></div>}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {/* <button type="submit">Save</button> */}
      {/* </form> */}
    </div>
  );
};

export default Editor;
