import { Sequelize, DataTypes, Model } from 'sequelize';

// Defina as opções de conexão ao banco de dados (substitua pelos seus dados)
const sequelize = new Sequelize({
  dialect: 'mysql', // ou outro banco de dados que você esteja usando
  storage: 'database.sqlite', // caminho para o arquivo do banco de dados
});

// Defina o model da tabela 'store'
class Store extends Model {
  public static id: DataTypes.INTEGER;
  public static storeName: DataTypes.STRING;

  constructor(values?: Partial<Store>) {
    super(values);
  }
}

// Associe o model à tabela no banco de dados
Store.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  storeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'store' });

// Exporte o model
export default Store;
