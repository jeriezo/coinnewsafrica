var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MONGOOSE/MODEL CONFIG TEAMS MEMBERS
var teamSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    bio: String,
    photo: String,
    category: String,
    twitterLink: String,
    linkedlnLink: String,
    projectOneLogo: String,
    projectOneYear: String,
    projectOneName: String,
    projectTwoName: String,
    projectTwoLogo: String,
    projectTwoYear: String,
    projectThreeName: String,
    projectThreeLogo: String,
    projectThreeYear: String,
    projectFourName: String,
    projectFourLogo: String,
    projectFourYear: String,
    projectFiveName: String,
    projectFiveLogo: String,
    projectFiveYear: String,

});

module.exports = mongoose.model("Team", teamSchema);