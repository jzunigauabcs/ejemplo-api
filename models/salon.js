module.exports = (db, dataType) => {
    const Salon = db.define('Salon', {
        id: {
            type: dataType.UUID,
            primaryKey: true,
            unique: true
        },
        'name': {
            type: dataType.STRING(40),
            allowNull: false
        }
    })

    Salon.associate = (models) => {
        models.Salon.belongsTo(models.Edificio, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Salon
}