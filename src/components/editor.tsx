"use client";
import { updateJournalEntry } from "@/app/utils/api";
import React, { useState } from "react";
import { useAutosave } from "react-autosave";
const Editor = (entry) => {
  // console.log(entry.entry.content);

  const [text, setText] = useState(entry.entry.content);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.entry.analysis);
  const updatedEntry = async (_text) => {
    setLoading(true);
    updateJournalEntry(entry.entry.id, _text);
    const data = await updateJournalEntry(entry.entry.id, text);
    setAnalysis(data.analysis);
    setLoading(false);
  };
  const { mood, summary, negative, color } = analysis;
  // console.log(entry.analysis)
  const list = [
    {
      name: "mood",
      content: mood,
    },
    {
      name: "summary",
      content: summary,
    },
    {
      name: "negative",
      content: negative ? "True" : "False",
    },
  ];
  useAutosave({
    data: text,
    onSave: updatedEntry,
  });
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* text area */}
      <div>
        {loading ? <div>loading...</div> : <div></div>}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      {/* analysis page */}
      <div className="flex justify-end flex-col">
        <h1 style={{ backgroundColor: color }}>
          this is the analysis sections
        </h1>
        {list.map((item) => {
          return (
            <div className="mb-5">
              <span>{item.name}:</span>
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editor;
