# LINK PARA LOS ITEMS DEL JUEGO:

https://ddragon.leagueoflegends.com/cdn/13.15.1/img/item/1001.png <-1001.png es el valor a modificar>

# LINK PARA LOS ICONOS DE PERFIL:

---

https://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/4073.png <-588.png es el valor a modificar>

---

# DATA DE LOS ITEMS.JSON

https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/item.json

---

# DATA DE CAMPEONES.JSON

https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json

---

# IMAGENES DE LOS CAMPEONES CON EL TITULO

https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Akali.png

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

const puuid =
'cvDLhCkV2doDjwB0c5K0W_KJGuSoLSaaDJ1E82xCg2AA07jUkaAhvBhZ1riArTSIvBRIlGO0OV6v-w';

const API_PUUID = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY_VITE}`;

## PARA ALGUN DIA HACER LOS BANS:

        const infoTeamsBans =
          teams.length > 0 ? teams.map((data) => data.bans) : false;

        console.log(infoTeamsBans);

        const championBans = infoTeamsBans.flatMap((data) =>
          data.map((championId) => championId.championId)
        );

        console.log('test1', championBans);
