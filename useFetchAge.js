import axios from "axios";
import { useState } from "react"

export default function useFetchAge() {

    const [age, setAge] = useState(null);
    const [loalding, setLoalding] = useState(false);

    async function handleClick(name) {
        setLoalding(true);
        const { data } = await axios.get(`https://api.agify.io/?name=${name}`);
        setAge(data.age);
        setLoalding(false);
    }

    return { age, loalding, fetchAge: handleClick }


}