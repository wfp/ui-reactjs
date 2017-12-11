/* Currency fetch */

export const loadCurrencies = (input) => {
    if (!input) {
	    return Promise.resolve({ options: [] });
	}

	return fetch(`/geo/lookups/currency/?q=${input}`)
	    .then((response) => response.json())
	    .then((json) => {
	            console.log("Retrived currencies ", json)
		return { options: json };
	    });
}
