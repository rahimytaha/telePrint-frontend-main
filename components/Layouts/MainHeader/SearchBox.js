'use client'
import { useEffect, useState } from "react";
import { FrontPages } from "../../../api/Api";
import Link from "next/link";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllFetch();
  }, [query]);

  async function getAllFetch() {
    try {
      let data = await FrontPages.getAllFetch();
      data = data?.data || [];
      data =
        query === ""
          ? []
          : data.filter((el) => el.key.toLowerCase().startsWith(query.toLowerCase()));
      console.log(data)
      setData(data);
    } catch (error) {
      console.log("Err", error);
    }
  }

  return (
    <div id="inpSearchBoxHeader" >
      <input

        style={{
          padding: "8px 12px",
          width: "300px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
        placeholder="suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span>
        <svg width="33" height="33" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="30" stroke="black" stroke-width="5" />
          <line x1="70" y1="70" x2="90" y2="90" stroke="black" stroke-width="5" />
          <rect x="85" y="85" width="10" height="10" transform="rotate(45 90 90)" fill="black" />
        </svg>
      </span>
      {query !== "" && (
        <div
          style={{
            maxHeight: "400px",
            marginTop: "10px",
            overflowY: "auto",
            width: "300px",
            backgroundColor: "#fff",
            position: "absolute",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        >
          {data.map((el, index) => (
            <Link key={index} href={`/produkte/${el?.canonicalUrl.split("produkte")[1]}`} >

              <a
                style={{
                  display: "block",
                  padding: "8px",
                  marginBottom: "6px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  color: "#333",
                  backgroundColor: "#f9f9f9",

                  transition: "background-color 0.2s",
                }}
                onClick={() => setQuery("")}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6f7ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              >
                {el?.key}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;