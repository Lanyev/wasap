const router = require("express").Router();

const conversationServices = require("./conversations.services");
const messageServices = require("../messages/messages.services");

const passportJWT = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(passportJWT, conversationServices.getConversationsByUser)
  .post(passportJWT, conversationServices.postNewConversation);

// router.route("/:id").get().post().delete();

router
  .route("/:conversation_id/messages")
  .get(passportJwt, messageServices.getAllMessagesByConversation);
