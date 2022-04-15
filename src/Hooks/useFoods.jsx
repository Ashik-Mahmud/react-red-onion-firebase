import axios from "axios";
import { useEffect, useState } from "react";

const useFoods = (slug) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFoodsByCategory = async () => {
      await axios.get("/data.json").then((res) => {
        setFoods(res?.data[0][slug]);
        setLoading(true);
      });
    };
    getFoodsByCategory();
  }, [slug]);
  return { foods, loading };
};

export default useFoods;
