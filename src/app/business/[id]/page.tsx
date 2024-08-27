import BusinessDetails from "../../../../models/business-details";

export default async function Business({ params }: { params: { id: string } }) {
  let data = await fetch(`https://api.yelp.com/v3/businesses/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      accept: "application/json",
    },
  });
  let results = (await data.json()) as BusinessDetails;
  return (
    <div>
      <h1>{results.name}</h1>
      {JSON.stringify(results)}
    </div>
  );
}
