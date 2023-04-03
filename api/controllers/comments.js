import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getComments = (req, res) => {
  // const q = "SELECT c.*, u.id as Userid FROM comments AS c JOIN users AS u ON (u.id = c.commentUserid) WHERE c.pid = ?"

const q = "SELECT c.*, u.id AS userId, u.username, u.img FROM comments AS c JOIN users AS u ON (u.id = c.commentUserid) WHERE c.pid = 15"

  db.query(q, [req.params.pid], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};



export const addComments = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO comments(`desc`, `createdAt`, `pid`, `commentUserid`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.createdAt,
      req.body.pid,
      userInfo.id
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(error);

      return res.json("Post was successfull");
    });
  });
};
