const pool = require('../utils/pool');

class Games {
  id;
  img;
  genre;
  title;
  description;

  constructor(row) {
    this.id = row.id;
    this.img = row.img;
    this.genre = row.genre;
    this.description = row.description;
  }


  static async getGames() {
    const { rows } = await pool.query(`
        SELECT * FROM games;
    `);
    return rows.map((row) => new Games(row));
  }

  static async insertGame({ img, genre, title, description }) {
    const { rows } = await pool.query(`
        INSERT INTO games (img, genre, title, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `,
    [img, genre, title, description]);
    return new Games(rows[0]);
  }


  static async getGameId(id) {
    const { rows } = await pool.query(`
        SELECT * FROM games
        WHERE id = $1
    `,
    [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Games(rows[0]);
  }


  static async deleteGame(id) {
    const { rows } = await pool.query(`
        DELETE FROM games
        WHERE id = $1
        RETURNING *
    `,
    [id]);
    return new Games(rows[0]);
  }


}
