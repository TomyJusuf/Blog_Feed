import axios from 'axios';
import { useQuery } from 'react-query';
// import { DataType } from '../types/DataType';

const getInfo = async () => {
  try {
    const response = await axios.get(
      'https://simple-blog-backend.dev.webundsoehne.com/api/v1/blogs'
    );

    // console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching da Info');
  }
};

export const useGetAllInfo = () => useQuery('dataInfo', getInfo);
