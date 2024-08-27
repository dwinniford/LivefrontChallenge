import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Business from "@/app/business/[id]/page";
import BusinessDetails from "../models/business-details";

describe("Business", () => {
  let fetchMock: any = undefined;
  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(getBusinessMock()) })
        ) as jest.Mock
      );
  });
  it("renders a back link", async () => {
    render(
      await Business({
        params: {
          id: "123",
        },
      })
    );

    const backLink = screen.getByText("Back");

    expect(backLink).toBeInTheDocument();
  });
});

function getBusinessMock() {
  let business: BusinessDetails = {
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
    is_claimed: false,
    photos: [],
    price: "",
    hours: [],
    messaging: {
      url: "",
      use_case_text: "",
    },
  };
  return business;
}
