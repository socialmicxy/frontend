import { withSessionRoute } from "../../lib/config/session";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
};
async function checkLoginRoute(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.session.user) {
    res.status(200).json({ status: true });
  } else {
    res.status(200).json({ status: false });
  }
}

export default withSessionRoute(checkLoginRoute);
