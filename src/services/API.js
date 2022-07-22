import axios from "axios";

  const url = 'https://api.prisga.id/api/v7-release/method/'
  const apiClient = axios.create({
    baseURL: url,
  });

  export default apiClient

