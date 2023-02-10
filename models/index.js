const User = require('./User');
const Posts = require('./Posts');
const Comment = require('./Comment');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Posts, {
    foreignKey: 'post_id',
});

module.exports = {
    Posts,
    User,
    Comment,
}