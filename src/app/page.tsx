"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
import { YelpResponse } from "../../models";
import Link from "next/link";
import { useState } from "react";
import BusinessCard from "../../components/business-card";

export default function Home() {
  let initialState: YelpResponse = {
    businesses: [],
    total: 0,
    region: null,
  };
  const [results, setResults] = useState(initialState);
  const [searchText, setSearchText] = useState("Oakland");

  let search = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    fetch(
      `https://api.yelp.com/v3/businesses/search?location=${searchText}&term=dimsum&radius=10000&limit=20&sort_by=best_match`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  };
  let handleTextChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  return (
    <div className="container mt-4">
      <h1>Find your Dimsum!</h1>
      <form onSubmit={search} className="row align-items-end">
        <div className="form-group py-2 col-12 col-md-8 col-xl-6">
          <label htmlFor="location">Enter a location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            onChange={handleTextChange}
            value={searchText}
          ></input>
        </div>
        <div className="col-12 col-md-4 py-2">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        {results.businesses.map((business) => (
          <BusinessCard business={business} />
        ))}
      </div>
    </div>
  );
}
