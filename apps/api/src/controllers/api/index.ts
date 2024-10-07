
import { Router } from "express";



import { AuthenticatedRequest } from "../../middleware/interfaces";

export function apiRouter() {
  const router = Router();



  router.get("/jobs", async (req: AuthenticatedRequest, res, next) => {
    try {


      return res.json({success: true});
    } catch (error) {
      next(error);
    }
  });



  return router;
}
