/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sk_kraje', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    geom: {
      type: DataTypes.ENUM('POINT', 'LINESTRING', 'POLYGON'),
      allowNull: true
    },
    ciskraja: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nazkraja: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sk_kraje'
  });
};
