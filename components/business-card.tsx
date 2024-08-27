import Link from "next/link";
import { Business } from "../models";

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <li key={business.id}>
      <Link href={`/business/${business.id}`}>{business.name}</Link>
    </li>
  );
}
