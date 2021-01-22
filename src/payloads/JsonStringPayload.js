export default (...values) => {
    const value = JSON.stringify(...values);
    return {
        type: 'json_string',
        content: { value },
    };
};
