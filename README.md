# Basketball API - NestJS

API REST desarrollada con NestJS, Sequelize y MySQL para gestionar:

- Equipos
- Jugadores
- Partidos

El proyecto implementa 3 CRUDs completos con relaciones entre todas las entidades.

## Tecnologias

- NestJS
- Node.js
- TypeScript
- Sequelize
- MySQL

## Requisitos

- Node.js 20+
- MySQL 8+

## Configuracion de base de datos

La API lee configuracion por variables de entorno, con estos valores por defecto:

- DB_HOST=localhost
- DB_PORT=3306
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=basketball_api

Crea la base de datos antes de arrancar:

```sql
CREATE DATABASE basketball_api;
```

## Instalacion

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run start:dev
```

Servidor por defecto:

- http://localhost:3000

## Endpoints

### Teams

- GET /teams
- GET /teams/:id
- POST /teams
- PATCH /teams/:id
- DELETE /teams/:id

Ejemplo POST /teams:

```json
{
  "nombre": "Lakers",
  "ciudad": "Los Angeles",
  "entrenador": "Darvin Ham",
  "fundacion": 1947
}
```

### Players

- GET /players
- GET /players/:id
- POST /players
- PATCH /players/:id
- DELETE /players/:id

Ejemplo POST /players:

```json
{
  "nombre": "LeBron James",
  "edad": 39,
  "posicion": "Alero",
  "dorsal": 23,
  "teamId": 1
}
```

### Matches

- GET /matches
- GET /matches/:id
- POST /matches
- PATCH /matches/:id
- DELETE /matches/:id

Ejemplo POST /matches:

```json
{
  "fecha": "2026-05-25T20:00:00.000Z",
  "puntosLocal": 102,
  "puntosVisitante": 98,
  "localTeamId": 1,
  "visitanteTeamId": 2
}
```

## Relaciones implementadas

- Un equipo tiene muchos jugadores (Team 1:N Player)
- Un jugador pertenece a un equipo (Player N:1 Team)
- Un partido tiene equipo local y visitante (Match N:1 Team, dos veces)
- Un equipo puede jugar muchos partidos como local y visitante

## Pruebas sugeridas en Postman

1. Crear 2 equipos
2. Crear jugadores asociados a un equipo
3. Crear partido entre dos equipos diferentes
4. Probar GET, PATCH y DELETE en los 3 recursos

## Scripts utiles

```bash
npm run start:dev
npm run build
npm run test
```
