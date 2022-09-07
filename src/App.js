import React from 'react';
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
    const entry = data.map(x => {
      return (
          <Entry
              key={x.id}
              {...x}
          />
      )
  })

  return (
      <div>
          <Navbar/>
          <section className="entry-list">
              {entry}
          </section>
      </div>
  )
}