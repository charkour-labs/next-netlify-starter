import { serialize } from "cookie";

export default function handler(req, res) {
  // Remove customer_group cookie
  res.setHeader(
    "Set-Cookie",
    serialize("customer_group", "", { path: "/", maxAge: -1 })
  );

  res.status(200).json({ name: "John Doe" });
}
