import ky from "ky"

export const api = ky.create({
  prefixUrl: "http://localhost:3000",
  retry: 3, // number of times the request will be retried on error
})
