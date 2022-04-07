// CONSULT THE TEAM BEFORE CHANGING ANYTHING HERE

const {
  User,
  Post,
  PostCategory,
  Comment,
  Admin,
} = require("../relationships");

async function seedDatabase() {
  await PostCategory.bulkCreate([
    {
      category_name: "News",
    },
    {
      category_name: "Community",
    },
    {
      category_name: "Events",
    },
    {
      category_name: "Complaints",
    },
    {
      category_name: "Compliments"
    }
  ]).then(() => {
    console.log("********Categories Seeded********");
  });

  await User.bulkCreate([
    {
      household_username: "House 1",
      house_number: 1123,
      email: "user1@luxury.com",
      password: "password1234",
    },
    {
      household_username: "House 2",
      house_number: 2232,
      email: "user2@luxury.com",
      password: "password1234",
    },
    {
      household_username: "House 3",
      house_number: 3232,
      email: "user3@luxury.com",
      password: "password1234",
    },
    {
      household_username: "House 4",
      house_number: 5453,
      email: "user4@luxury.com",
      password: "password1234",
    },

  ]).then(() => {
    console.log("********Users Seeded********");
  });

  await Admin.bulkCreate([
    {
      name: "admin1",
      position: "admin",
      email: "admin@luxuryadmin.com",
      password: 'password1234'
    },
    {
      name: "admin2",
      position: "admin",
      email: "admin2@luxuryadmin.com",
      password: 'password1234'
    },
    {
      name: "admin3",
      position: "admin",
      email: "admin3@luxuryadmin.com",
      password: 'password1234'
    },

  ]).then(() => {
    console.log("********Admins Seeded********");
  });

  await Post.bulkCreate([
    {
      post_title: "Missing Child!",
      post_content: "Look out for little debbie! from house number 2323!",
      admin_id: 1,
      post_category_id: 1,
    },
    {
      post_title: "oh no!",
      post_content: "i hope debbie gets found!",
      user_id: 2,
      post_category_id: 2,
    },
    {
      post_title: "so sad",
      post_content: "debbie is such a sweet girl!!",
      user_id: 1,
      post_category_id: 2,
    },
    {
      post_title: "huh?",
      post_content: "who is debby?",
      user_id: 4,
      post_category_id: 2,
    },
    {
      post_title: "For Debbie",
      post_content: "Candle light ceremony for debbie at house 2343",
      user_id: 3,
      post_category_id: 3,
    }
  ]).then(() => {
    console.log("********Posts Seeded********");
  });

  await Comment.bulkCreate([
    {
      comment_content: "user 1 comment",
      user_id: 1,
      post_id: 1,
    },
    {
      comment_content: "second user 1 comment",
      user_id: 1,
      post_id: 2,
    },
    {
      comment_content: "user 2 comment",
      user_id: 2,
      post_id: 2,
    },
    {
      comment_content: "user 3 comment",
      user_id: 3,
      post_id: 3,
    },
    {
      comment_content: "second user 3 comment",
      user_id: 3,
      post_id: 4,
    },
  ]).then(() => {
    console.log("********Comments Seeded********");
  });
}

// FOR VALIDATION OR OTHER TESTING

async function testSeeds() {

    // Should throw a new Error: "cannot have both admin and user ids!"
  await Comment.create({
    comment_content: "test",
    user_id: 1,
    admin_id: 1,
    post_id: 1,
  });
}

// RUN SEED OR TEST SEED SEPARATELY

seedDatabase();
//testSeeds();
