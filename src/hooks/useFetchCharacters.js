import { useReducer, useState } from "react";
import axios from "axios";
import APIURL from "../helpers/api";
function useFetchCharacters() {
	const [character, setCharacter] = useState({
		totalPages: 1,
		currentPage: 1,
		characters: [],
		loading: false
	});
	const fetchCharactersByPage = async () => {
		try {
			const response = await axios.get(APIURL.FetchCharacterNextPage(character.currentPage));
			if (response?.status == 200) {
				const totalPages = response?.data?.info?.pages;
				const fetchedResults = response?.data?.results;
				const updatedResults = [...character.characters, ...fetchedResults];
				if (totalPages && Array.isArray(fetchedResults) && Array.isArray(updatedResults)) {

					if (character.currentPage < totalPages) {
						setCharacter({
							totalPages: totalPages,
							currentPage: character.currentPage + 1,
							characters: updatedResults,
							isLoading: false
						});
					} else {
						setCharacter({
							totalPages: totalPages,
							currentPage: character.currentPage,
							characters: updatedResults,
							isLoading: true
						});
					}
				}
			}
		} catch (err) {
			setCharacter((prevState) => { return { ...prevState, isLoading: false } });
			console.log(err);
		}
	}

	const fetchCharacters = async () => {
		try {
			setCharacter((prevState) => { return { ...prevState, isLoading: true, currentPage: 1 } });
			const response = await axios.get(APIURL.FetchCharacterFirstPage);
			if (response?.status == 200) {
				const totalPages = response?.data?.info?.pages;
				const fetchedResults = response?.data?.results;
				const updatedResults = [...fetchedResults];
				if (totalPages && Array.isArray(fetchedResults) && Array.isArray(updatedResults)) {
					if (character.currentPage < totalPages) {
						setCharacter({
							totalPages: totalPages,
							currentPage: character.currentPage + 1,
							characters: updatedResults,
							isLoading: false
						});
					} else {
						setCharacter({
							totalPages: totalPages,
							currentPage: character.currentPage,
							characters: updatedResults,
							isLoading: true
						});
					}
				}
			}
		} catch (err) {
			setCharacter((prevState) => { return { ...prevState, isLoading: false } });
			console.log(err);
		}
	}

	return [character, fetchCharacters, fetchCharactersByPage];
}

export default useFetchCharacters;