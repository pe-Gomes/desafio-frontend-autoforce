import { formatPhoneNumber } from "./format-phone-number"

describe("Format Phone Number", () => {
  it("Should format a 10 characters phone number", () => {
    const phone = "1199999999"

    expect(formatPhoneNumber(phone)).toBe("(11) 9999-9999")
  })

  it("Should format a 11 characters phone number", () => {
    const phone = "11999999999"

    expect(formatPhoneNumber(phone)).toBe("(11) 99999-9999")
  })

  it("Should return the original number if lenght is different than 10 or 11", () => {
    const phone = "119999999999"

    expect(formatPhoneNumber(phone)).toBe(phone)
  })
})
