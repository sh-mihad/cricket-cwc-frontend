import axios from "axios";
import { useState } from "react";

const useAxiosGet = () => {
  const [res, setRes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = (url, cb) => {
    setLoading(true);
    axios.get(url)
    .then((response) => {
        setRes(response?.data)
        setLoading(false)
        cb && cb(res?.data)
    }).catch(error=>{
        setError(error.message)
    })
  };

  return [res, getData, loading, setRes, error];
};

export default useAxiosGet;
