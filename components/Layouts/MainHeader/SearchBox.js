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
          : data.filter((el) => el.key.toLowerCase().includes(query.toLowerCase()));
          console.log(data)
      setData(data);
    } catch (error) {
      console.log("Err", error);
    }
  }

  return (
    <div style={{ position: "relative", width: "300px", margin: "20px auto" }}>
      <input
        style={{
          padding: "8px 12px",
          width:"300px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
        placeholder="suchen..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {query !== "" && (
        <div
          style={{
            maxHeight: "400px",
            marginTop: "10px",
            overflowY: "auto",
            width:"300px",
            backgroundColor: "#fff",
            position:"absolute",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        >
          {data.map((el, index) => (
            <Link key={index} href={`${el.canonicalUrl}`} passHref>
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