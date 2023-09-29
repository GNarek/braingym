import { UserInfo } from "firebase-admin/auth";
import { Request, Response } from "express";
import { ProfileDB } from "../../../models/Profile";

class Alphabet {
  get = async function (
    req: Request<{}, any, any, any, Record<string, any>> & { user: UserInfo },
    res: Response<any, Record<string, any>>
  ) {
    const profile = await ProfileDB.getProfile(req.user.uid);

    res.send(JSON.stringify({ user: profile }));
  };
}

const alphabet = new Alphabet();

export { alphabet };
