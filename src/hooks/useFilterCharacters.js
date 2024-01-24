import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import APIURL from "../helpers/api";
function useFilterCharacters() {
	const [input, setInput] = useState("");
	const [filteredCharacters, setFilteredCharacters] = useState({
		totalPage: 1,
		currentPage: 1,
		characters: [],
		loading: false
	});
	const fetchNextPage = async () => {
		try {
			if (filteredCharacters.totalPage === filteredCharacters.currentPage) {
				return;
			}
			const response = await axios.get(APIURL.FilterCharacterNextPage(filteredCharacters.currentPage, input));
			if (response?.status == 200) {
				const totalPages = response?.data?.info?.pages;
				const fetchedResults = response?.data?.results;
				const updatedResults = [...filteredCharacters.characters, ...fetchedResults];
				if (totalPages && Array.isArray(fetchedResults) && Array.isArray(updatedResults)) {
					if (filteredCharacters.currentPage + 1 < totalPages) {
						setFilteredCharacters({
							totalPage: totalPages,
							currentPage: filteredCharacters.currentPage + 1,
							characters: updatedResults,
							isLoading: false
						});
					} else {
						setFilteredCharacters({
							totalPage: totalPages,
							currentPage: filteredCharacters.currentPage,
							characters: updatedResults,
							isLoading: true
						});
					}
				}
			}
		} catch (err) {
			if (err?.response?.data) {
				setFilteredCharacters(
					{
						totalPage: 0,
						currentPage: 1,
						characters: [],
						loading: false
					}
				);
			}
			console.log(err);
		}
	}


	const fetchFilteredCharacters = async () => {
		try {
			setFilteredCharacters((prevState) => { return { ...prevState, isLoading: true, currentPage: 1 } });
			const response = await axios.get(APIURL.FilterCharacterFirstPage(input));
			if (response?.status == 200) {
				const totalPages = response?.data?.info?.pages;
				const fetchedResults = response?.data?.results;
				const updatedResults = [...fetchedResults];
				if (totalPages && Array.isArray(fetchedResults) && Array.isArray(updatedResults)) {
					if (filteredCharacters.currentPage < totalPages) {
						setFilteredCharacters({
							totalPage: totalPages,
							currentPage: 2,
							characters: updatedResults,
							isLoading: false
						});
					} else {
						setFilteredCharacters({
							totalPage: totalPages,
							currentPage: 1,
							characters: updatedResults,
							isLoading: true
						});
					}
				}
			}
		} catch (err) {
			setFilteredCharacters((prevState) => { return { ...prevState, isLoading: false } });
			if (err?.response?.data) {
				setFilteredCharacters(
					{
						totalPage: 0,
						currentPage: 1,
						characters: [],
						loading: false
					}
				);
			}
			console.log(err);
		}
	}
	useEffect(() => {
		if (input === "") {
			setFilteredCharacters({
				totalPage: 0,
				currentPage: 1,
				characters: [],
				loading: false
			});
		} else {
			fetchFilteredCharacters();
		}
	}, [input]);
	return [input, setInput, filteredCharacters, fetchFilteredCharacters, fetchNextPage];
}

export default useFilterCharacters;