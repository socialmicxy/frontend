import { withSessionRoute } from "../../lib/config/session";
import connectToDatabase from "../../lib/config/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/user";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  User.findOne({ email: req.body.email }).then(async (result) => {
    if (result) {
      req.session.user = {
        userId: result._id.toString(),
        email: result.email,
      };
      await req.session.save();
      console.log(req.session, "kkkkk");
      res.status(200).json({ succes: true });
    } else {
      User.create({
        username: req.body.name,
        profileUrl: req.body.image,
        email: req.body.email,
        connectedAccounts: [],
        musicsyncspace: false,
      }).then(async (result) => {
        req.session.user = {
          userId: result._id.toString(),
          email: result.email,
        };
        await req.session.save();
        res.status(200).json({ succes: true });
      });
    }
  });
}

export default withSessionRoute(loginRoute);
