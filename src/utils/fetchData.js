export const exerciseOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': '9178b51e3dmsha2427c35cff98a2p15ed6ejsnf7d907c7c667',
	  'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
	},
  };
  
  export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': '9178b51e3dmsha2427c35cff98a2p15ed6ejsnf7d907c7c667',
	  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
	},
  };
  
  export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
	return data;
  };
  