/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sk_obce', {
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
    dow: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idn4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nm4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idn3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idn2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vymera: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shape_leng: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shape_area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'sk_obce'
  });
};
