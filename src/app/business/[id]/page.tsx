"use client";
import Link from "next/link";
import BusinessDetails from "../../../../models/business-details";

export default async function Business({ params }: { params: { id: string } }) {
  let data = await fetch(`https://api.yelp.com/v3/businesses/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      accept: "application/json",
    },
  });
  let results = (await data.json()) as BusinessDetails;
  return (
    <div className="container mt-4">
      <div className="my-3">
        <Link href="/">Back</Link>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <img src={results.image_url} className="w-100"></img>
        </div>
        <div className="col-md-8">
          <h1>{results.name}</h1>
          <p>
            Address: {results.location.display_address}
            <br />
            Phone: {results.display_phone}
            <br />
            <Link target="_blank" href={results.url}>
              Website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
