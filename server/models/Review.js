import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from "./User.js";
import Offer from "./Offer.js";

const Review = sequelize.define('Review', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [5, 1024] }
  },
  publishDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 }
  }
}, {
  tableName: 'reviews',
  timestamps: false,
});


Review.belongsTo(User, { as: 'author', foreignKey: { allowNull: false } });
Review.belongsTo(Offer, { foreignKey: { allowNull: false } });

export default Review;