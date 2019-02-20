import { Request, Response } from "express";
import { MWSService } from "../services/MWSService";
import MwsApi from "amazon-mws";
/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    res.render("home", {
    title: "Home"
  });
};
