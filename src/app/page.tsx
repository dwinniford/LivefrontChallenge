import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
import { YelpResponse } from "../../models";
import Link from "next/link";

export default async function Home() {
  let data = await fetch(
    "https://api.yelp.com/v3/businesses/search?location=Oakland&term=dimsum&radius=10000&limit=20&sort_by=best_match",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        accept: "application/json",
      },
    }
  );
  let results = (await data.json()) as YelpResponse;

  return (
    <div>
      <h1>Search for a business! {process.env.CLIENT_ID}</h1>
      <ul>
        {results.businesses.map((b) => (
          <li key={b.id}>
            <Link href={`/business/${b.id}`}>{b.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
