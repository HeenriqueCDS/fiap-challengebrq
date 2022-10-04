import React from "react"
import { api } from "../services/api"

const getUserIP = async () => {
    const res = await api.get("https://geolocation-db.com/json/")
    return res.data.IPv4
}


export const useLocalTemperature = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [temperature, setTemperature] = React.useState(0)
    const [city, setCity] = React.useState("")
    
    const handleFetch = async () => {
        const ip = await getUserIP()

        const res = await api.get(`https://api.hgbrasil.com/weather`, {
            params: {
                format: 'json-cors',
                user_ip: ip,
                key: "d2ff4f08"
            },

        })

        const { temp, city } = res.data.results

        setTemperature(temp)
        setCity(city)

    }
    React.useEffect(() => {
        handleFetch().then(() => setIsLoading(false))
    }, [])

    return { isLoading,temperature, city }
}


// {
// 	"by": "geo_ip",
// 	"valid_key": true,
// 	"results": {
// 		"temp": 16,
// 		"date": "30/09/2022",
// 		"time": "16:52",
// 		"condition_code": "40",
// 		"description": "Chuvas esparsas",
// 		"currently": "dia",
// 		"cid": "",
// 		"city": "Francisco Morato, SP",
// 		"img_id": "40",
// 		"humidity": 92,
// 		"wind_speedy": "2.67 km/h",
// 		"sunrise": "05:48 am",
// 		"sunset": "06:05 pm",
// 		"condition_slug": "rain",
// 		"city_name": "Francisco Morato",
// 		"forecast": [
// 			{
// 				"date": "30/09",
// 				"weekday": "Sex",
// 				"max": 16,
// 				"min": 12,
// 				"description": "Chuva",
// 				"condition": "rain"
// 			},
// 			{
// 				"date": "01/10",
// 				"weekday": "Sáb",
// 				"max": 23,
// 				"min": 14,
// 				"description": "Chuvas esparsas",
// 				"condition": "rain"
// 			},
// 			{
// 				"date": "02/10",
// 				"weekday": "Dom",
// 				"max": 24,
// 				"min": 13,
// 				"description": "Tempo limpo",
// 				"condition": "clear_day"
// 			},
// 			{
// 				"date": "03/10",
// 				"weekday": "Seg",
// 				"max": 19,
// 				"min": 14,
// 				"description": "Chuva",
// 				"condition": "rain"
// 			},
// 			{
// 				"date": "04/10",
// 				"weekday": "Ter",
// 				"max": 18,
// 				"min": 13,
// 				"description": "Tempo nublado",
// 				"condition": "cloudly_day"
// 			},
// 			{
// 				"date": "05/10",
// 				"weekday": "Qua",
// 				"max": 25,
// 				"min": 12,
// 				"description": "Tempo nublado",
// 				"condition": "cloudly_day"
// 			},
// 			{
// 				"date": "06/10",
// 				"weekday": "Qui",
// 				"max": 19,
// 				"min": 15,
// 				"description": "Chuva",
// 				"condition": "rain"
// 			},
// 			{
// 				"date": "07/10",
// 				"weekday": "Sex",
// 				"max": 22,
// 				"min": 14,
// 				"description": "Chuvas esparsas",
// 				"condition": "rain"
// 			},
// 			{
// 				"date": "08/10",
// 				"weekday": "Sáb",
// 				"max": 22,
// 				"min": 12,
// 				"description": "Tempo limpo",
// 				"condition": "clear_day"
// 			},
// 			{
// 				"date": "09/10",
// 				"weekday": "Dom",
// 				"max": 27,
// 				"min": 12,
// 				"description": "Tempo limpo",
// 				"condition": "clear_day"
// 			}
// 		],
// 		"latitude": -23.2792,
// 		"longitude": -46.7448
// 	},
// 	"execution_time": 0.11,
// 	"from_cache": false
// }