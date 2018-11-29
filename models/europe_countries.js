/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('europe_countries', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    geom: {
      type: DataTypes.ENUM('POINT', 'LINESTRING', 'POLYGON'),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    orgn_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ids: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'europe_countries'
  });
};
