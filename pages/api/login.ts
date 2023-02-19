import { withSessionRoute } from "../../lib/config/session";
import { connect } from "../../lib/config/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../lib/types";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  res.send("Logged in");
}

export default withSessionRoute(loginRoute);
