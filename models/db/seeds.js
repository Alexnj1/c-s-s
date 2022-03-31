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
      category_name: "Category 1",
    },
    {
      category_name: "Category 2",
    },
    {
      category_name: "Category 3",
    },
  ]).then(() => {
    console.log("********Categories Seeded********");
  });

  await User.bulkCreate([
    {
      household_username: "users1",
      house_number: 1,
      email: "user1@luxury.com",
      password: "password1234",
    },
    {
      household_username: "users2",
      house_number: 2,
      email: "user2@luxury.com",
      password: "password1234",
    },
    {
      household_username: "users3",
      house_number: 3,
      email: "user3@luxury.com",
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
    },
    {
      name: "admin2",
      position: "admin",
      email: "admin2@luxuryadmin.com",
    },
    {
      name: "admin3",
      position: "admin",
      email: "admin3@luxuryadmin.com",
    },
  ]).then(() => {
    console.log("********Admins Seeded********");
  });

  await Post.bulkCreate([
    {
      post_title: "post1",
      post_content: "this is post 1",
      admin_id: 1,
      post_category_id: 1,
    },
    {
      post_title: "post2",
      post_content: "this is post 2",
      admin_id: 2,
      post_category_id: 2,
    },
    {
      post_title: "post3",
      post_content: "this is post 3",
      user_id: 1,
      post_category_id: 2,
    },
    {
      post_title: "post4",
      post_content: "this is post 4",
      user_id: 2,
      post_category_id: 3,
    },
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