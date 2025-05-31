import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Offer = sequelize.define('Offer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'offers',
  timestamps: false,
});

export default Offer;
