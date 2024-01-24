let APIURL = {
    FetchCharacterFirstPage: `${process.env.REACT_APP_API_BASE_URL}/api/character/`,
    FetchCharacterNextPage: (pageNumber) => `${process.env.REACT_APP_API_BASE_URL}/api/character/?page=${pageNumber}`,
    FilterCharacterFirstPage: (name) => `${process.env.REACT_APP_API_BASE_URL}/api/character/?name=${name}`,
    FilterCharacterNextPage: (pageNumber, name) => `${process.env.REACT_APP_API_BASE_URL}/api/character/?page=${pageNumber}&name=${name}`
};

export default APIURL;