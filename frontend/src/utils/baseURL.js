const getBaseUrl = () => {
    const url = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
    console.log("API Base URL:", url);
    return url;
}

export default getBaseUrl;