                                Asi Mapearlo, "events" : Adentro -> itemId, participantId, timestamp, type
            "events": [
                            {
                            "itemId": 1028,
                            "participantId": 1,
                            "timestamp": 183883,
                            "type": "ITEM_PURCHASED"
                            },

                        "itemId": 1036, : https://ddragon.leagueoflegends.com/cdn/13.15.1/img/item/1036.png
                        "participantId": 1,
                        "timestamp": 508415, : Minuto 8
                        "type": "ITEM_DESTROYED"  : Item Destruido -> Espada Larga

                        "itemId": 3051, https://ddragon.leagueoflegends.com/cdn/13.15.1/img/item/3051.png
                        "participantId": 1,
                        "timestamp": 508415, Minuto 8
                        "type": "ITEM_PURCHASED" : Item Comprado

Fetch para hacer Despues:

# https://americas.api.riotgames.com/lol/match/v5/matches/LA2_1338625019/timeline?api_key=RGAPI-eeea1957-0f83-4a81-ae7a-fef47461218e

Mapear todo y buscar por itemId, timestamp y type

Ejemplo de TimeStramp para devolver el minuto Exacto:

##

const timestamp = 508415

const test = 3600000

const minutos = timestamp / (test / 60)
console.log(minutos)

##
