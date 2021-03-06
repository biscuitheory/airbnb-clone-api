'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.belongsTo(models.Place, {
        foreignKey: {
          name: 'place_id',
        },
      });
    }
  }
  Booking.init(
    {
      place_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );

  return Booking;
};
