import { Router } from "express";
import { getAllInvitations,  updateInvitation,getinvItationByUserId, delInvitation , addInvitation,} from "../controllers/invitation.js";

const router = Router();
router.get("/", getAllInvitations)
router.get("/byUserId/:userid", getinvItationByUserId)
router.put("/invitations/:id/isOk", updateInvitation)
router.delete("/invitations/:id",delInvitation)
router.post("/", addInvitation)

export default router;









































