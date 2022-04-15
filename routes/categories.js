const express = require("express")
const router = express.Router()
const topicsController = require("./../controllers/topicsController")
const usersController = require("./../controllers/usersController")
const Topic = require("../models/topic")

router.get("/", topicsController.getAllTopics)

router.get("/create", usersController.checkAuthenticated, topicsController.getCreateTopicPage)
router.post(
	"/create",
	usersController.checkAuthenticated,
	topicsController.upload.single("image"),
	topicsController.validateTopicFormFields(),
	topicsController.handleCreateTopic
)

router.get("/:id", topicsController.getTopicById)

router.get("/:id/question", usersController.checkAuthenticated, topicsController.getAskQuestionPage)
router.post("/:id/question", usersController.checkAuthenticated, topicsController.validateQuestionFormFields(), topicsController.handleCreateQuestion)

router.post("/follow-unfollow", usersController.checkAuthenticated, topicsController.handleFollowingUnfollowing)

router.get("/api/search", topicsController.handleTopicSearch1)
router.get("/api/search/:searchInput", topicsController.handleTopicSearch2)

module.exports = router