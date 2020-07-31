import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID vXINFly8TIcG3yADHQAyiV89GW4LUUgXWPoTh0I2vlc",
  },
});
