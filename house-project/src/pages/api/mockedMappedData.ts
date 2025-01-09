import { MOCKED_MAPPED_DATA } from "@/utiles/mockedData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(MOCKED_MAPPED_DATA);
}
