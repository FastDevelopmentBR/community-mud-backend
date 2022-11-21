module.exports = {
    "type": "mysql",
    "host": process.env.DATABASE_HOST || "localhost",
    "port": process.env.DATABASE_PORT || 3306,
    "username": process.env.DATABASE_USERNAME || "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": "communitymud",
    "entities": ["src/**/entities/*.entity{.ts,.js}"],
    "seeds": ["src/database/seeds/**/*{.ts,.js}"],
    "factories": ["src/database/factories/**/*{.ts,.js}"]
}