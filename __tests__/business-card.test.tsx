import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BusinessCard from "../components/business-card";
import { Business } from "../models";

describe("Business Card", () => {
  it("renders a heading", () => {
    render(<BusinessCard business={getBusinessMock()} />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});

function getBusinessMock() {
  let business: Business = {
    id: "",
    alias: "",
    name: "Test name",
    image_url: "",
    is_closed: false,
    url: "",
    review_count: 0,
    categories: [],
    rating: 0,
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    transactions: [],
    location: {
      address1: "",
      address2: "",
      address3: null,
      city: "",
      zip_code: "",
      country: "",
      state: "",
      display_address: [],
    },
    phone: "",
    display_phone: "",
    distance: 0,
    business_hours: [],
    attributes: {
      business_temp_closed: null,
      menu_url: null,
      open24_hours: null,
      waitlist_reservation: null,
    },
  };
  return business;
}
