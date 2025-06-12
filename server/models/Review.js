import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from "./User.js";
import Offer from "./Offer.js";

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'reviews',
  timestamps: false,
});

Review.belongsTo(User, { as: 'author', foreignKey: { allowNull: false } });
Review.belongsTo(Offer, { foreignKey: { allowNull: false } });

export default Review;