import Link from "next/link";
import { Business } from "../models";
import Image from "next/image";

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card mb-2">
        <img className="card-img-top" src={business.image_url}></img>
        <div className="card-body">
          <h2 className="card-title">{business.name}</h2>
          <p className="card-text">{business.location.display_address}</p>
          <Link
            key={business.id}
            href={`/business/${business.id}`}
            className="btn btn-primary"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
}
