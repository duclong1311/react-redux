import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
    const isLoading = useSelector((state) => state.loading.isLoading); // Lấy trạng thái loading từ store

    return <div>{isLoading ? 'Loading...' : 'Idle'}</div>;
};

export default Loading;
