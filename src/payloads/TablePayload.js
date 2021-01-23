export default (values, label) => {
    return {
        type: 'table',
        content: { values, label },
    };
};
