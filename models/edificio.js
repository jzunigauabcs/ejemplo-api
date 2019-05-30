module.exports = (db, dataType) => {
    const Edificio = db.define('Edificio', {
        'id': {
            type: dataType.UUID,
            primaryKey: true,
            unique: true
        },
        'name': {
            type: dataType.STRING(40),
            allowNull: false
        }
    })

    Edificio.associate = (models) => {
        models.Edificio.hasMany(models.Salon)
    }
    return Edificio
}
