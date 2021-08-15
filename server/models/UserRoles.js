module.exports =  (sequelize, DataTypes) => {
    const GroupUsers = sequelize.define('UserRoles', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id'
        }
      }
    });
    return GroupUsers;
  };