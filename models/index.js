const User = require('./User');
const Posts = require('./Posts');
const Comment = require('./Comment');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsToMany(User, {
    foreignKey: 'user_id',
});

Comment.belongsToMany(Posts, {
    foreignKey: 'post_id',
})