/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cr_okresy', {
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
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perimeter: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nazev: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ob91: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ob01: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ob_311202: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    okres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nuts4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nuts3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nuts2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kraj1960: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    knok: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nazkr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nazev_eng: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nazkr_eng: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nezam: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hustota2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hustota: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    hustota_fi: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'cr_okresy'
  });
};
