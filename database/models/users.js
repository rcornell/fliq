module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false
    // },
    name: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    authId: {
      type: DataTypes.STRING
    },
    loginNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    reView: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    watchedMovieId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });
  return User;
};
