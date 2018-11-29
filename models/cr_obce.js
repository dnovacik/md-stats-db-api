/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cr_obce', {
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
    objectid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perimeter: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    kod_cast: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naz_cast: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kod_obec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naz_obec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lau1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naz_lau1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cznuts3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naz_cnuts3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shape_area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shape_len: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'cr_obce'
  });
};
